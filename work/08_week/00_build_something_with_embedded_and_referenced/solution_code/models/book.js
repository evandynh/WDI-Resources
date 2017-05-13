var mongoose = require('mongoose')

var bookSchema = new mongoose.Schema({
  title: String,
  genres: [{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}]
})

var Book = mongoose.model('Book', bookSchema)

module.exports = Book
