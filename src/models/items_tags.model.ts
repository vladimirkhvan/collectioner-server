import { Sequelize, DataTypes } from 'sequelize';

const main = async () => {
    const sequelize = new Sequelize('collector', 'root', '1234', {
        host: 'localhost',
        dialect: 'mysql',
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }

    const Items_tags = sequelize.define('items_tags', {
        tag_id: {
            primaryKey:true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        item_id: {
            primaryKey:true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'items_tags'
    });

    try {
        await Items_tags.sync();
        console.log('Items_tags table created successfully!');
    } catch (error) {
        console.error('Unable to create table : ', error);
    }
    sequelize.close();
};

main();
