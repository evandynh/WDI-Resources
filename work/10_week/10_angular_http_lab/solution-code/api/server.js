var express = require('express'),
	path = require('path'),
	cors = require('cors'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	app = express(),
	mongoose = require('mongoose'),
	port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/infamous-masterminds')

var routes = require('./config/routes')

app.use(cors())

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

app.listen(port, function() {
	console.log("It's going down on port", port)
})
