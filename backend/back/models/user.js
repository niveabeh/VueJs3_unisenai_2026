const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING,
        unique: true
    },

    senha: {
        type: DataTypes.STRING
    }
});


module.exports = User;