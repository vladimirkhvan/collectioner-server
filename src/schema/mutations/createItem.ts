import { ItemInput } from './../../shared/constants/modelInputs/ItemInput';
import { db } from '../../models';
import { userContext } from 'src/shared/context/userContext';
import { ItemType } from 'src/shared/constants/modelTypes/Item';
import { TYPES } from '../../shared/constants/modelInputs/CustomFields';
import { CustomValuesInput } from 'src/shared/constants/modelInputs/CustomValuesInput';
import { Op } from 'sequelize';

export const createItem = async (
    _: any,
    { input }: ItemInput,
    context: userContext,
): Promise<ItemType | null> => {
    if (!context.req.session!.userId) {
        return null;
    }

    const collection = await db.collection.findOne({ where: { id: input.collectionId } });

    if (context.req.session!.userId != collection?.getDataValue('authorId')) {
        return null;
    }

    const item = await db.item.create({
        collection_id: input.collectionId,
        name: input.name,
    });

    await db.tag.bulkCreate(
        input.tags.map((tag) => ({
            title: tag,
        })),
        { ignoreDuplicates: true },
    );

    const tags = await db.tag.findAll({ where: { [Op.or]: input.tags.map((tag) => ({ title: tag })) } });

    const itemId = item.getDataValue('id');

    await db.items_tags.bulkCreate(
        tags.map((tag) => ({
            tag_id: tag.getDataValue('id'),
            item_id: itemId,
        })),
        { ignoreDuplicates: true },
    );

    const fieldsMap = new Map();
    fieldsMap.set(TYPES.STRING, 'string_value');
    fieldsMap.set(TYPES.NUMBER, 'int_value');
    fieldsMap.set(TYPES.TEXT, 'text_value');
    fieldsMap.set(TYPES.BOOL, 'boolean_value');
    fieldsMap.set(TYPES.DATE, 'date_value');

    await db.custom_field_value.bulkCreate(
        input.customFieldsValues.map((field) => ({
            attribute_type: field.attribute_type,
            item_id: itemId,
            custom_field_id: field.customFieldId,
            [fieldsMap.get(field.attribute_type)]:
                field[fieldsMap.get(field.attribute_type) as keyof CustomValuesInput],
        })),
    );

    return item.toJSON();
};
