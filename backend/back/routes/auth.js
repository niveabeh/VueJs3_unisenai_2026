const router = require("express").Router();


const User = require("../models/user");
const bcrypt = require("bcrypt");



const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "segredo123";


// CADASTRO
router.post("/register", async (req, res) => {

    try {

        const { nome, email, senha } = req.body;

        console.log(nome, email, senha);


        // valida campos
        if (!nome || !email || !senha) {
            return res.status(400).json({
                erro: "Nome, email e senha são obrigatórios"
            });
        }


        // verifica se email já existe
        const usuarioExiste = await User.findOne({
            where: { email }
        });


        if (usuarioExiste) {
            return res.status(409).json({
                erro: "Email já cadastrado"
            });
        }


        // criptografa senha
        const senhaHash = await bcrypt.hash(senha, 10);


        // cria usuário
        const usuario = await User.create({

            nome,
            email,
            senha: senhaHash

        });
        res.status(201).json({

            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email

        });


    } catch (erro) {

        res.status(500).json({

            erro: "Erro ao cadastrar usuário",
            detalhes: erro.message

        });

    }

});





// LOGIN
router.post("/login", async (req, res) => {


    try {


        const { email, senha } = req.body;



        if (!email || !senha) {

            return res.status(400).json({

                erro: "Email e senha são obrigatórios"

            });

        }



        // procura usuário
        const usuario = await User.findOne({

            where: { email }

        });



        if (!usuario) {

            return res.status(404).json({

                erro: "Usuário não encontrado"

            });

        }




        // compara senha
        const senhaValida = await bcrypt.compare(

            senha,

            usuario.senha

        );




        if (!senhaValida) {


            return res.status(401).json({

                erro: "Senha incorreta"

            });


        }




        // cria token
        const token = jwt.sign(

            {
                id: usuario.id,
                email: usuario.email
            },

            SECRET,

            {
                expiresIn: "1h"
            }

        );





        res.json({

            mensagem: "Login realizado com sucesso",

            token,

            usuario: {

                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email

            }

        });



    } catch (erro) {


        res.status(500).json({

            erro: "Erro ao realizar login",

            detalhes: erro.message

        });


    }


});




module.exports = router;