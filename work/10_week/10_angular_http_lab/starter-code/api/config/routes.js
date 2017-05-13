var express = require('express'),
  router = express.Router()

var {index, create, show, update, destroy} = require('../controllers/criminals')

// http://127.0.0.1:3000/api/criminals
router.route('/criminals')
  //GET all criminals
  .get(index)
  //POST a new criminal
  .post(create)

router.route('/criminals/:id')
  // GET a specific criminal
  .get(show)
  // PATCH update existing criminal
  .patch(update)
  // DELETE remove specific criminal from DB
  .delete(destroy)

module.exports = router
