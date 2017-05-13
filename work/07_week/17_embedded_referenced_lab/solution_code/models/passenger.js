var mongoose = require('mongoose')

var passengerSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  dob: Date
})

var Passenger = mongoose.model('Passenger', passengerSchema)

module.exports = Passenger
