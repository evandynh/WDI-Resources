var mongoose = require('mongoose')

var flightSchema = new mongoose.Schema({
  from: String,
  to: String,
  airline: String
})

var Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight
