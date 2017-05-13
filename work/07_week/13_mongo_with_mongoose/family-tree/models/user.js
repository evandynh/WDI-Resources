var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String, required: true, unique: true},
  meta: {
    age: Number,
    website: String,
    address: String,
    country: String
  },
  createdAt: Date,
  updatedAt: Date
})

UserSchema.methods.sayHello = function() {
  console.log("Hi " + this.firstName)
}

UserSchema.methods.sayAge = function() {
  console.log(this.firstName + " is " + this.meta.age + " years old.")
}

var User = mongoose.model('User', UserSchema)

module.exports = User
