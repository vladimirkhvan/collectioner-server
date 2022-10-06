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

    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rights: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    try {
        await User.sync();
        console.log('users table created successfully!');
    } catch (error) {
        console.error('Unable to create table : ', error);
    }
    sequelize.close();
};

main();
