var express = require('express'),
	router  = new express.Router()

// Require controllers.
var pagesController = require('../controllers/pages')

// root path:
router.route('/')
  .get(pagesController.home)

module.exports = router
