var Author = require('../models/author')

function newAuthor(req, res) {
  res.render('authors/new')
}

function createAuthor(req, res) {
  var author = new Author(req.body)

  author.save(function(err, author) {
    if (err) throw err

    res.redirect('/')
  })
}

module.exports = {
  newAuthor: newAuthor,
  createAuthor: createAuthor
}
