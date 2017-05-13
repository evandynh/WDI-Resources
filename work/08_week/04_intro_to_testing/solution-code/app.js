var express = require('express'),
		path = require('path'),
		logger = require('morgan'),
		bodyParser = require('body-parser'),
		app = express(),
		port = process.env.PORT || 3000


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require('./controllers'))

app.listen(port, function(){
	console.log('Magic is happening on port', port)
})
