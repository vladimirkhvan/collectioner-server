import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {

    const Custom_field_value = sequelize.define('custom_field_value', {
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
        },
        item_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        custom_field_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        string_value: {
            type: DataTypes.STRING
        },
        text_value: {
            type: DataTypes.TEXT,
        },
        int_value: {
            type: DataTypes.INTEGER,
        },
        boolean_value: {
            type: DataTypes.TINYINT,
        },
        date_value: {
            type: DataTypes.DATE,
        },
    }, {
        timestamps: false,
    });

    return Custom_field_value;
};