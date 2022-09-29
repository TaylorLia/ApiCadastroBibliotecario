'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()
const livro = require('../models/livros')

class livroRepository {
    constructor () {}
    async create(data) {
        let res = await firestore.collection('livros').doc().set(data);
        return res
    }

    async update(id,data) {
        let livro = await firestore.collection('livros').doc(id)
        let res = await livro.update(data)
        return res
    }

    async getAll() {
        let livros = await firestore.collection('livros')
        let res = await livros.get()
        return res
    }

    async getById(id) {
        let livro = await firestore.collection('livros').doc(id)
        let res = await livro.get()
        return res
    }

    async delete(id) {
        return await firestore.collection('livros').doc(id).delete()
    }
}

module.exports = livroRepository