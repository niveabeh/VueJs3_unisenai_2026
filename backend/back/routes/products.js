const router = require("express").Router();
const Product = require("../models/product");
const auth = require("../middleware/auth");



//todas as rotas com auth serão necessário autenticacao 
router.get("/",  auth,  async (req, res) => {


    const produtos =    
        await Product.findAll();
    res.json(produtos);

});


router.post("/", auth,  async (req, res) => {
    const produto =
        await Product.create(req.body);
    res.json(produto);
});

router.put("/:id", auth,  async (req, res) => {
    await Product.update(
        req.body,
        {
            where: { id: req.params.id }
        }
    );
    res.json({
        mensagem: "Atualizado"
    });
});

router.delete("/:id",  auth,  async (req, res) => {
    await Product.destroy({
        where: { id: req.params.id }

    });
    res.json({
        mensagem: "Removido"
    });
});

module.exports = router;