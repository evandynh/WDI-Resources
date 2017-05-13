var {index, create, show, update, destroy} = require('../controllers/users_controller.js'),
	express			= require('express'),
	userRoutes		= express.Router()

//create routes for /users
userRoutes.route('/')
	.get(index)
	.post(create)

//create routes for /users/:email
userRoutes.route('/:email')
	.get(show)
	.patch(update)
	.delete(destroy)

module.exports = userRoutes

// This object destructuring is useful for drying up code.
// It will only work if you either use different routes files for each resource
// or if you name the functions differently in your routes files
// ex: 'getAllUsers' instead of 'index'