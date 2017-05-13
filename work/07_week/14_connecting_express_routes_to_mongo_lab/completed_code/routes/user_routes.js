var usersController = require('../controllers/users_controller.js'),
	express			= require('express'),
	userRoutes		= express.Router()

//create routes for /users
userRoutes.route('/')
	.get(usersController.index)
	.post(usersController.create)

//create routes for /users/:email
userRoutes.route('/:email')
	.get(usersController.show)
	.patch(usersController.update)
	.delete(usersController.destroy)

module.exports = userRoutes
