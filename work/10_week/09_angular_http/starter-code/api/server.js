var express = require('express'),
  path = require('path'),
  cors = require('cors'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT || 3000

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/presidents-app')

var routes = require('./config/routes')

app.use(cors())

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, function() {
  console.log('Port', port, 'is life!')
})
