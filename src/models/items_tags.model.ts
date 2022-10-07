import { Sequelize, DataTypes } from 'sequelize';

export default async (sequelize: Sequelize) => {
    const Items_tags = sequelize.define(
        'items_tags',
        {
            tag_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            item_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: 'items_tags',
        },
    );

    return Items_tags;
};
