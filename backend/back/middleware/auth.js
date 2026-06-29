const jwt = require("jsonwebtoken");


module.exports = function (req, res, next) {


    const token = req.headers.authorization;



    if (!token) {

        return res.status(401).json({

            erro: "Token não informado"

        })

    }



    const tokenLimpo = token.split(" ")[1];



    try {


        const usuario = jwt.verify(

            tokenLimpo,

            "segredo123"

        );



        req.usuario = usuario;


        next();



    } catch (error) {


        res.status(401).json({

            erro: "Token inválido"

        })


    }



}