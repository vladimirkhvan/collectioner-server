import { Sequelize, DataTypes } from 'sequelize';

export default async (sequelize: Sequelize) => {

    const Theme = sequelize.define('theme', {
        id: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        theme: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: false,
    });

    return Theme;
};