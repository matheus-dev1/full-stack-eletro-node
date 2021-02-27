const mongo = require("mongoose");

function connection (){
    mongo.connect("mongodb://localhost:27017/bancofullstack", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Conexão com o MongoDB realizada com sucesso!")
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = connection();