var mongoose = require('mongoose'),
    Book = require('./book')

var authorSchema = new mongoose.Schema({
  name: String,
  books: [Book.schema]
})

var Author = mongoose.model('Author', authorSchema)

module.exports = Author
