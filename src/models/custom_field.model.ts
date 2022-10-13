import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {

    const Custom_field = sequelize.define('custom_field', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        attribute: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        attribute_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        collection_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references:{
            //     model:'collection',
            //     key:'id'
            // }
        },
    }, {
        timestamps: false,
    });

    return Custom_field;
};