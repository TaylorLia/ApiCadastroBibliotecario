class Livro {
    constructor(
      id,
      name,
      categoria,
      description,
      autor,
      editora,
      paginas,
      idioma
    ) {
      this.id = id
      this.name = name
      this.categoria = categoria
      this.description = description
      this.autor = autor
      this.editora = editora
      this.paginas = paginas
      this.idioma = idioma
    }
  }

  module.exports = Livro