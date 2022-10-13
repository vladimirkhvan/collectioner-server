import { Sequelize, DataTypes } from 'sequelize';

export default async (sequelize: Sequelize) => {
    const Items_tags = sequelize.define(
        'items_tags',
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                unique: true,
                allowNull: false,
            },
            tag_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                // references:{
                //     model:'tag',
                //     key:'id'
                // }
            },
            item_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                // references:{
                //     model:'item',
                //     key:'id'
                // }
            },
        },
        {
            timestamps: false,
            tableName: 'items_tags',
        },
    );

    return Items_tags;
};
