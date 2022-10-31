import { CollectionReturn } from 'src/shared/constants/modelTypes/CollectionReturn';
import { db } from '../../models/index';

export const getCollections = async (_: any, _args: any): Promise<CollectionReturn[] | null> => {
    const collections = await db.collection.findAll({include: [db.user]});
    return collections.map(collection => collection.toJSON());
};
