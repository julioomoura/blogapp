//Carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require('./routes/admin')
    const path = require("path")
    const mongoose = require('mongoose')

//Configurações
    //Body Parser
        app.use(bodyParser.urlencoded({extended : true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout : 'main'}))
        app.set('view engine', 'handlebars')
    //Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect("mongodb://localhost/blogapp").then(() => {
            console.log("Conectado ao mongo")
        }).catch((erro) => {
            console.log("Erro ao se conectar: " + erro)
        })
    //Public
        app.use(express.static(path.join(__dirname, "public")))
//Rotas
    app.use('/admin', admin)
//Outros
const PORT = 8765
app.listen(PORT, () => {
    console.log("Servidor rodando na porta http://localhost:8765 ")
})
