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

    const Tag = sequelize.define('tag', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: false,
    });

    try {
        await Tag.sync();
        console.log('tags table created successfully!');
    } catch (error) {
        console.error('Unable to create table : ', error);
    }
    sequelize.close();
};

main();
