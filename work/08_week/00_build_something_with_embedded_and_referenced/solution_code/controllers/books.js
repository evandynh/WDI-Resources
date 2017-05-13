var Book = require('../models/book'),
    Genre = require('../models/genre'),
    Author = require('../models/author')

function newBook(req, res) {
  Genre.find({}, function(err, genres) {
    if (err) throw err

    Author.find({}, function(err, authors) {
      if (err) throw err

      res.render('books/new', {genres: genres, authors: authors})
    })
  })
}

function createBook(req, res) {
  console.log('Req.body is', req.body)
  Author.findById(req.body.author, function(err, author) {
    if (err) throw err

    console.log(author)
    author.books.push({
      title: req.body.title,
      genres: req.body.genres
    })

    author.save(function(err, author) {
      if (err) throw err

      res.redirect('/')
    })
  })
}

module.exports = {
  newBook: newBook,
  createBook: createBook
}
