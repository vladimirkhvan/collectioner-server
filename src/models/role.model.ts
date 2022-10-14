import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
   
    const Role = sequelize.define('role', {
        id: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps:false,
    });

    return Role;
};