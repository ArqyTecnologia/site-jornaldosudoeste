"use strict";

module.exports = (sequelize: any, DataTypes: any) => {
    const { Model } = require("sequelize");
    class Email extends Model {}

    Email.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize,
        modelName: "Email",
        tableName: "emails",
        timestamps: false
    });

    return Email;
}
