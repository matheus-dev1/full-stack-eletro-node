const { Schema, model } = require("mongoose");

const ComentariosSchema = new Schema({
    nome:{
        type: String
    },
    msg:{
        type: String
    },
})

const modelo = model("Comentarios", ComentariosSchema)

module.exports = modelo;