import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    const Types = sequelize.define(
        'types',
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
            },
            attribute_type: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            timestamps: false,
        },
    );

    return Types;
};
