const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");





const Product = sequelize.define("Product", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING
    },

    preco: {
        type: DataTypes.FLOAT
    },

    categoria: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.TEXT
    }

});

module.exports = Product;