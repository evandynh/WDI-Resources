var mongoose = require('mongoose')

//create user schema
var userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, require: true, unique: true},
  age: Number
})

//creates a method to display user's info
userSchema.methods.info = function() {
  console.log(`My name is ${this.name}. I am ${this.age} years old.`)
}

//sets variable for model
var User = mongoose.model('User', userSchema)

//exports module
module.exports = User
