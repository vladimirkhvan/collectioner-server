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

    const Custom_field = sequelize.define('custom_field', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        attribute: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        attribute_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        collection_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });

    try {
        await Custom_field.sync();
        console.log('custom_fields table created successfully!');
    } catch (error) {
        console.error('Unable to create table : ', error);
    }
    sequelize.close();
};

main();
