import { TagType } from 'src/shared/constants/modelTypes/Tag';
import { db } from '../../models/index';

export const getTags = async (): Promise<TagType[]> => {
    const tags = await db.tag.findAll();
    return tags.map(tag => tag.toJSON());
};
