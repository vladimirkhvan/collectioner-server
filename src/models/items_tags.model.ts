import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
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
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            item_id: {
                type: DataTypes.INTEGER.UNSIGNED,
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
