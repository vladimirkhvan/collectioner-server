import { db } from '../../models/index';
import { CollectionReturn } from 'src/shared/constants/modelTypes/CollectionReturn';

export const getOneCollection = async (
    _: any,
    { id }: { id: string },
): Promise<CollectionReturn | null> => {
    const collection = await db.collection.findOne({ where: { id: id }, include: [db.user] });
    console.log(collection?.toJSON());
    return collection ? collection.toJSON() : null;
};
