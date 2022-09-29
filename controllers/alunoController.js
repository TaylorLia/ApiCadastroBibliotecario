// definindo o strict mode
'use strict'

// Definindo imports
require('../models/alunos')
const repository = require('../repositories/alunoRepository')

function alunoController(){}

alunoController.prototype.post = async (req,res) => {
  let resultado = await new repository().create(req.body)
  res.status(201).send(resultado)
}

alunoController.prototype.put = async (req,res) => {
  let resultado = await new repository().update(req.params.id,req.body)
  res.status(202).send(resultado)
}

alunoController.prototype.get = async (req,res) => {
  let lista = await new repository().getAll
  res.status(200).send(lista)
}

alunoController.prototype.getById = async(req,res) =>{
  let aluno = await new repository().getById(req.params.id)
  res.status(200).send(aluno)
}

alunoController.prototype.delete = async(req,res) =>{
  let resultado = await new repository().delete(req.params.id)
  res.status(204).send(resultado)
}

module.exports = alunoController