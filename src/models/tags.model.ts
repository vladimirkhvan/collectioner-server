import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {

    const Tag = sequelize.define('tag', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
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

    return Tag;
};