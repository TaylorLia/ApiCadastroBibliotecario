// definindo o strict mode
'use strict'

//definindo imports
const express = require('express')
const cors = require('cors')
const config = require('./config')
const alunoRoutes = require('./routes/alunoRoutes')
const autorRoutes = require('./routes/autorRoutes')
const editoraRoutes = require('./routes/editoraRoutes')
const funcionarioRoutes = require('./routes/funcionarioRoutes')
const livroRoutes = require('./routes/livroRoutes')

// inicializando o express
const app = express();

// Definindo a utilização de JSON no corpo da requisição
app.use(express.json())

// Definindo a utilização do CORS
app.use(cors())

//utilizando as rotas para cada model
app.use('/api/aluno',alunoRoutes)
app.use('/api/autor',autorRoutes)
app.use('/api/editora',editoraRoutes)
app.use('/api/funcionario',funcionarioRoutes)
app.use('/api/livro',livroRoutes)

// Definindo a porta onde o servidor estará ouvindo
app.listen(config.port, () =>{
  console.log('Api está rodando em http://localhost:' + config.port)
})
