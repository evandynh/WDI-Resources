var express = require('express'),
	path = require('path'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	routes = require('./config/routes')

mongoose.connect('mongodb://localhost:27017/candies-app')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.use(routes)

app.listen(port, function(){
	console.log("Port", port, "says hello!")
})