import { db } from '../../models';
import { userContext } from 'src/shared/context/userContext';
import { CollectionInput } from 'src/shared/constants/modelInputs/CollectionInput';
import { CollectionType } from 'src/shared/constants/modelTypes/Collection';

export const createCollection = async (
    _: any,
    { input }: CollectionInput,
    context: userContext,
): Promise<CollectionType | null> => {
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
                [currentType.getDataValue('attribute_type')]: currentType.getDataValue('id'),
            }),
            {},
        );

        await db.custom_field.bulkCreate(
            input.fields.map((field) => ({
                attribute: field.attribute,
                attribute_type:
                    // @ts-ignore
                    typesMap[field.attribute_type],
                collection_id: collection.getDataValue('id'),
            })),
        );
    }

    return collection.toJSON();
};
