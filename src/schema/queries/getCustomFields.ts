import { CustomFieldsType } from './../../shared/constants/modelTypes/CustomFields';
import { db } from '../../models/index';

export const getCustomFields = async (
    _: any,
    { collection_id }: { collection_id: string },
): Promise<CustomFieldsType[] | null> => {
    const customField = await db.custom_field.findAll({
        where: { collection_id },
        include: [db.types],
    });
    return customField.map((field) => ({
        ...field.toJSON(),
        attribute_type: field.getDataValue('type').attribute_type,
    }));
};
