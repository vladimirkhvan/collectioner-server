import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {

    const Custom_field_value = sequelize.define('custom_field_value', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        custom_field_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        data_value: {
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