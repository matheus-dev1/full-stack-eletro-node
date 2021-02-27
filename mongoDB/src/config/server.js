const express = require("express");
const cors = require("cors")
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json()) 

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = 8000
app.listen(port, ()=>{
    console.log("Servidor rodado em http://localhost:" + port)
})

module.exports = app