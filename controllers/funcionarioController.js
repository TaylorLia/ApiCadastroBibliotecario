// definindo o strict mode
'use strict'

// Definindo imports
require('../models/funcionarios')
const repository = require('../repositories/funcionarioRepository')

function funcionarioController(){}

funcionarioController.prototype.post = async (req,res) => {
  let resultado = await new repository().create(req.body)
  res.status(201).send(resultado)
}

funcionarioController.prototype.put = async (req,res) => {
  let resultado = await new repository().update(req.params.id,req.body)
  res.status(202).send(resultado)
}

funcionarioController.prototype.get = async (req,res) => {
  let lista = await new repository().getAll
  res.status(200).send(lista)
}

funcionarioController.prototype.getById = async(req,res) =>{
  let funcionario = await new repository().getById(req.params.id)
  res.status(200).send(funcionario)
}

funcionarioController.prototype.delete = async(req,res) =>{
  let resultado = await new repository().delete(req.params.id)
  res.status(204).send(resultado)
}

module.exports = funcionarioController