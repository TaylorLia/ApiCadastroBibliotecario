// definindo o strict mode
'use strict'

// Definindo imports
require('../models/livros')
const repository = require('../repositories/livroRepository')

function livroController(){}

livroController.prototype.post = async (req,res) => {
  let resultado = await new repository().create(req.body)
  res.status(201).send(resultado)
}

livroController.prototype.put = async (req,res) => {
  let resultado = await new repository().update(req.params.id,req.body)
  res.status(202).send(resultado)
}

livroController.prototype.get = async (req,res) => {
  let lista = await new repository().getAll
  res.status(200).send(lista)
}

livroController.prototype.getById = async(req,res) =>{
  let livro = await new repository().getById(req.params.id)
  res.status(200).send(livro)
}

livroController.prototype.delete = async(req,res) =>{
  let resultado = await new repository().delete(req.params.id)
  res.status(204).send(resultado)
}

module.exports = livroController