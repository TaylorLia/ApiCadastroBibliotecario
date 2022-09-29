'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()
const aluno = require('../models/alunos')

class alunoRepository {
    constructor () {}
    async create(data) {
        let res = await firestore.collection('alunos').doc().set(data);
        return res
    }

    async update(id,data) {
        let aluno = await firestore.collection('alunos').doc(id)
        let res = await aluno.update(data)
        return res
    }

    async getAll() {
        let alunos = await firestore.collection('alunos')
        let res = await alunos.get()
        return res
    }

    async getById(id) {
        let aluno = await firestore.collection('alunos').doc(id)
        let res = await aluno.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('alunos').doc(id).delete()
    }
}

module.exports = alunoRepository