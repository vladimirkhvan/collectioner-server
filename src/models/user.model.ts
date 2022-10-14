import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
   
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
            // references:{
            //     model:'role',
            //     key:'id'
            // }
        },
    });

    return User;
};