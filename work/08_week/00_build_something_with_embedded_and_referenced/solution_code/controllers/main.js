var Author = require('../models/author'),
    Genre = require('../models/genre')

function index(req, res) {
  Author.find({})
    .populate('books.genres')
    .exec(function(err, authorsList) {
      if (err) throw err

      res.render('index', {authors: authorsList})
    })
}

module.exports = {
  index: index
}
