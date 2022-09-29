'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()
const funcionario = require('../models/funcionarios')

class funcionarioRepository {
    constructor () {}
    async create(data) {
        let res = await firestore.collection('funcionarios').doc().set(data);
        return res
    }

    async update(id,data) {
        let funcionario = await firestore.collection('funcionarios').doc(id)
        let res = await funcionario.update(data)
        return res
    }

    async getAll() {
        let funcionarios = await firestore.collection('funcionarios')
        let res = await funcionarios.get()
        return res
    }

    async getById(id) {
        let funcionario = await firestore.collection('funcionarios').doc(id)
        let res = await funcionario.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('funcionarios').doc(id).delete()
    }
}

module.exports = funcionarioRepository