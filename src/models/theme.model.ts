import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {

    const Theme = sequelize.define('theme', {
        id: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: false,
    });

    return Theme;
};