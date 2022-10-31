import { ItemType } from './../../shared/constants/modelTypes/Item';
import { db } from '../../models/index';

export const getItems = async (
    _: any,
    { collection_id }: { collection_id: string },
): Promise<ItemType[] | null> => {
    const items = await db.item.findAll({ where: { collection_id } });

    return items.map(item => item.toJSON());
};
