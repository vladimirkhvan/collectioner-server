import { db } from '../models/index';
import bcrypt from 'bcrypt';
import { UserInput } from 'src/shared/constants/modelsTypes';

export const resolvers = {
    Query: {
        async getAllUsers() {
            const users = await db.user.findAll();
            return users;
        },
    },

    Mutation: {
        async createUser( _: any, { input } : UserInput) {
            const salt = await bcrypt.genSalt(5);
            console.log(salt, input);
            const hashedPassword = await bcrypt.hash(input.password, salt)
            const user = await db.user.create({
                name: input.name,
                password: hashedPassword,
                email: input.email,
                role: 1,
            });

            console.log(user);

            return user;
        },
    },
};
