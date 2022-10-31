import { db } from '.';

export const db_init = async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    try {
        await db.sequelize.sync();
        console.log('db was initialized successfully');
    } catch (error) {
        console.error('could not connect to database: ', error);
    }

    db.collection.belongsTo(db.user, { foreignKey: 'authorId' });
    db.collection.hasMany(db.item, { foreignKey: 'collection_id' });
    db.custom_field.belongsTo(db.types, { foreignKey: 'attribute_type' });

    try {
        await db.types.bulkCreate(
            [
                { attribute_type: 'BOOLEAN' },
                { attribute_type: 'NUMBER' },
                { attribute_type: 'STRING' },
                { attribute_type: 'DATE' },
                { attribute_type: 'TEXT' },
            ],
            {
                ignoreDuplicates: true,
            },
        );
        console.log('types were initialized successfully');
    } catch (error) {
        console.error('could not create types: ', error);
    }
};
