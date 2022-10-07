import { Sequelize, DataTypes } from 'sequelize';

export default async (sequelize: Sequelize) => {

    const Item = sequelize.define('item', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        collection_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });

    return Item;
};