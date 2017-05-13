var usersController = require('../controllers/users_controller.js'),
	express			= require('express'),
	userRoutes		= express.Router() 

//create routes for /users
userRoutes.route('/')
	//add routes for the root route /users

//create routes for /users/:email
userRoutes.route('/:email')
	//add routes for the route /users/:email

module.exports = userRoutes