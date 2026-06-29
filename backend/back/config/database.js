const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
    "ecommerce",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql"
    }

);

async function conectar() {

    try {
        await sequelize.authenticate();
        console.log("MySQL conectado");
    }
    catch (error) {
        console.log(error);
    }
}
conectar();

module.exports = sequelize;