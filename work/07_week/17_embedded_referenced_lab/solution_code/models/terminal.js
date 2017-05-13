var mongoose = require('mongoose')

var terminalSchema = new mongoose.Schema({
  name: String,
  flights: [{type: mongoose.Schema.ObjectId, ref: 'Flight'}],
  capacity: Number
})

var Terminal = mongoose.model('Terminal', terminalSchema)

module.exports = Terminal
