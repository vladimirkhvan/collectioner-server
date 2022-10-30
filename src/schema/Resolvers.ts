import {
    UserType,
    LoginInput,
    CollectionInput,
    ThemeInput,
    ThemeType,
    CollectionType
} from './../shared/constants/modelsTypes';
import { db } from '../models/index';
import bcrypt from 'bcrypt';
import { UserInput } from 'src/shared/constants/modelsTypes';
import { userContext } from 'src/shared/context/userContext';

export const resolvers = {
    Query: {
        async getAllUsers() {
            const users = await db.user.findAll();
            return users;
        },

        async getMe(_: any, _args: any, context: userContext): Promise<UserType | null> {
            if (!context.req.session!.userId) {
                return null;
            }

            const user = await db.user.findOne({ where: { id: context.req.session!.userId } });

            if (!user) {
                return null;
            }

            return user.toJSON();
        },
        async getThemes(_: any, _args: any, context: userContext): Promise<ThemeType[] | null> {
            if (!context.req.session!.userId) {
                return null;
            }

            const themes = await db.theme.findAll();

            if (!themes) {
                return null;
            }

            return themes.map((theme) => theme.toJSON());
        },
    },

    Mutation: {
        async createUser(_: any, { input }: UserInput): Promise<UserType> {
            const salt = await bcrypt.genSalt(5);
            console.log(salt, input);
            const hashedPassword = await bcrypt.hash(input.password, salt);
            const user = await db.user.create({
                name: input.name,
                password: hashedPassword,
                email: input.email,
                role: 1,
            });

            return user.toJSON();
        },

        async login(_: any, { input }: LoginInput, context: userContext): Promise<UserType | null> {
            const user = await db.user.findOne({ where: { email: input.email } });

            if (!user) {
                return null;
            }

            const isValid = await bcrypt.compare(input.password, user.getDataValue('password'));

            if (!isValid) {
                return null;
            }

            if (!context.req.session) {
                return null;
            }

            context.req.session.userId = user.getDataValue('id');

            return user.toJSON();
        },

        async logout(_: any, _args: any, context: userContext): Promise<Boolean> {
            return new Promise((res, rej) => {
                context.req.session?.destroy((err) => {
                    if (err) {
                        console.log(err);
                        rej(false);
                    }
                    context.res.clearCookie('qid');
                    res(true);
                });
            });
        },

        async createCollection(
            _: any,
            { input }: CollectionInput,
            context: userContext,
        ): Promise<CollectionType | null> {
            if (!context.req.session!.userId) {
                return null;
            }

            const collection = await db.collection.create({
                name: input.name,
                authorId: context.req.session!.userId,
                description: input.description,
                theme: input.theme,
                image: input.image ? input.image : null,
            });

            if (input.fields) {
                const types = await db.types.findAll();

                const typesMap = types.reduce(
                    (typesMap, currentType) => ({
                        ...typesMap,
                        [currentType.getDataValue('attribute_type')]:
                            currentType.getDataValue('id'),
                    }),
                    {},
                );

                await db.custom_field.bulkCreate(
                    input.fields.map((field) => ({
                        attribute: field.attribute,
                        attribute_type:
                            // @ts-ignore
                            typesMap[
                                field.attribute_type
                            ],
                        collection_id: collection.getDataValue('id'),
                    })),
                );
            }

            return collection.toJSON();
        },

        async createTheme(
            _: any,
            { input }: ThemeInput,
            context: userContext,
        ): Promise<ThemeType | null> {
            if (!context.req.session!.userId) {
                return null;
            }

            const theme = await db.theme.create({
                label: input.label,
            });

            return theme.toJSON();
        },
    },
};
