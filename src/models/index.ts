import { Sequelize } from 'sequelize';
import * as configPresets from '../config/config.json';

import collection from './collection.model';
import custom_field_value from './custom_field_value.model';
import custom_field from './custom_field.model';
import item from './item.model';
import items_tags from './items_tags.model';
import tag from './tags.model';
import user from './user.model';
import role from './role.model';
import theme from './theme.model';

const config =
    process.env.NODE_ENV === 'test' ? configPresets.test : configPresets.development;

const sequelize = new Sequelize(config.db_name, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: 3306
});

export const db = {
    sequelize,
    theme: theme(sequelize),
    collection: collection(sequelize),
    item: item(sequelize),
    custom_field: custom_field(sequelize),
    custom_field_value: custom_field_value(sequelize),
    tag: tag(sequelize),
    items_tags: items_tags(sequelize),
    role: role(sequelize),
    user: user(sequelize),
};
