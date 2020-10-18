//importar dependência
const express = require('express')
const path = require('path')

const pages = require("./pages.js")

//iniciando o express
const server = express()

// Utilizando os arquivos estaticos
server
    .use(express.static('public'))

    // Configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Criar rotas
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

//ligar o server
server.listen(5500)