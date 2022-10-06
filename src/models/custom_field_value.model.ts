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

    const Custom_field_value = sequelize.define('custom_field_value', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        custom_field_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        data_value: {
            type: DataTypes.STRING
        },
        text_value: {
            type: DataTypes.TEXT,
        },
        int_value: {
            type: DataTypes.INTEGER,
        },
        boolean_value: {
            type: DataTypes.TINYINT,
        },
        date_value: {
            type: DataTypes.DATE,
        },
    }, {
        timestamps: false,
    });

    try {
        await Custom_field_value.sync();
        console.log('custom_field_values table created successfully!');
    } catch (error) {
        console.error('Unable to create table : ', error);
    }
    sequelize.close();
};

main();
