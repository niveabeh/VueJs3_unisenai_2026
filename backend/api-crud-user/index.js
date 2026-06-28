//iniciando o express
const express = require("express");

//troca de requisicoes com outros
const cors = require("cors");

const app = express();

//usar o cors
app.use(cors());

//usar formato json
app.use(express.json());

let usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" }
];


//puxar as infos
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});


//atualizar
app.post("/usuarios", (req, res) => {

    const usuario = {
        id: usuarios.length + 1,
        nome: req.body.nome
    };

    usuarios.push(usuario);

    res.status(201).json(usuario);

});


//deletar
app.delete("/usuarios/:id", (req, res) => {

    const indice = usuarios.findIndex(
        u => u.id == req.params.id
    );

    if (indice == -1) {

        return res.status(404).send();

    }

    usuarios.splice(indice, 1);

    res.send("Usuário removido");

});

app.listen(3000);