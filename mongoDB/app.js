const app = require("./src/config/server")
const connection = require("./src/config/connection")
const Comentarios = require("./src/models/comentarios");

app.get("/comentarios", async (req, res)=>{
    const resultado = await Comentarios.find()

    res.json(resultado)
})
 
app.post("/comentarios", (req, res) =>{
    const newComentarios = {
        nome: req.body.nome,
        msg: req.body.msg
    }

    new Comentarios(newComentarios).save().then(()=>{
        res.json(resultado)
    }).catch((err) => {
        res.json("Erro ao registrar comentário")
    })
})