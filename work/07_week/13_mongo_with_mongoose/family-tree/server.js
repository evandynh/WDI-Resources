var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    app = express(),
    User = require('./models/user')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/family-tree')

var bob = new User({
  firstName: 'Bob',
  email: 'bob@ga.co',
  meta:{
    age: 27
  }
})

bob.sayHello()

bob.sayAge()

var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('magic is happening on port', port)
})
