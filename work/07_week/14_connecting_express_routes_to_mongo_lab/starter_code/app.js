var express		= require('express'),
	app			= express(),
	logger		= require('morgan'),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose'),
	port 		= process.env.PORT || 3000,
	userRoutes 	= require('./routes/user_routes.js')

//establish connection to mongo database
mongoose.connect('mongodb://localhost/officeHoursLab')

//logs requests made to the app
app.use(logger('dev'))

//makes json objects available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//create the root route
app.get('/', function(req, res) {
	res.send('Welcome to the home page')
})

//use user routes for those routes
app.use('/users', userRoutes)

//sets the port for the server
app.listen(port)
console.log('Server started on', port)