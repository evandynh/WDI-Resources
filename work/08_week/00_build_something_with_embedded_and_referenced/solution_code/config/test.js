// Open the Node repl
// enter: .load config/test.js

var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/library")

var Genre = require('../models/genre')
var Book = require('../models/book')
var Author = require('../models/author')

var genre1 = new Genre({
  name: 'Fiction'
})
genre1.save()
var genre2 = new Genre({
  name: 'Non-Fiction'
})
genre2.save()
var genre3 = new Genre({
  name: 'Fantasy'
})
genre3.save()

var author1 = new Author({
  name: 'J.K. Rowling',
  books: []
})

author1.books.push({
  title: 'Harry Potter and the Chamber of Secrets',
  genres: [genre1, genre3]
})
author1.save()
