import { Sequelize } from 'sequelize';
import * as config from '../config/config.json';

import collection from './collection.model';
import custom_field_value from './custom_field_value.model';
import custom_field from './custom_field.model';
import item from './item.model';
import items_tags from './items_tags.model';
import tag from './tags.model';
import user from './user.model';

const developmentConfig = config.development;

const sequelize = new Sequelize(
    developmentConfig.db_name,
    developmentConfig.username,
    developmentConfig.password,
    {
        host: developmentConfig.host,
        dialect: 'mysql',
    },
);

export const db = {
    sequelize,
    collection: collection(sequelize),
    custom_field: custom_field(sequelize),
    custom_field_value: custom_field_value(sequelize),
    item: item(sequelize),
    items_tags: items_tags(sequelize),
    tag: tag(sequelize),
    user: user(sequelize),
};