const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

require("./models/user");
require("./models/product");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
    "/auth",
    require("./routes/auth")
);


app.use(
    "/products",
    require("./routes/products")
);


sequelize.sync().then(() => {
        console.log("Banco sincronizado");
});

app.listen(3000, () => {
    console.log(
        "API rodando na porta 3000"
    );

});