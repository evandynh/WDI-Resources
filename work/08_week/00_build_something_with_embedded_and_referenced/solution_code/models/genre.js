var mongoose = require('mongoose')

var genreSchema = new mongoose.Schema({
  name: String
})

var Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre
