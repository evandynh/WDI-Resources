var Genre = require('../models/genre')

function newGenre(req, res) {
  res.render('genres/new')
}

function createGenre(req, res) {
  var genre = new Genre(req.body)

  genre.save(function(err, genre) {
    if (err) throw err

    res.redirect('/')
  })
}

module.exports = {
  newGenre: newGenre,
  createGenre: createGenre
}
