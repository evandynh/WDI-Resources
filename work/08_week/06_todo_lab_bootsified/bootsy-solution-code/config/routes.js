var express = require('express'),
		router  = new express.Router()

// Require controllers.
var {home, about, todos} = require('../controllers/pages'),
// var pagesController = require('../controllers/pages')
		{index, create, update, destroy} = require('../controllers/todos')
		// todosController = require('../controllers/todos')
// root path:
router.route('/')
  .get(home)
	// .get(pagesController.home)
router.route('/about')
	.get(about)
	// .get(pagesController.about)
router.route('/todos')
	.get(todos)
	// .get(pagesController.todos)

// API routes
router.route('/api/todos')
	.get(index)
	// .get(todosController.index)
	.post(create)
	// .post(todosController.create)
router.route('/api/todos/:id')
	.patch(update)
	// .patch(todosController.update)
	.delete(destroy)
	// .delete(todosController.destroy)

module.exports = router
