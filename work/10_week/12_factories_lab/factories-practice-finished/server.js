var
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	favicon = require('serve-favicon')

app.use(logger('dev'))
app.use(express.static('public'))
app.use(favicon(__dirname + '/public/img/favicon.ico'))

app.listen(3000, function(err) {
	if(err) return console.log(err)
	console.log("Server listening on 3000..")
})