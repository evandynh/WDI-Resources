var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override') //used to manipulate POST

var {getAll, createPresident, getPresident, updatePresident, removePresident} = require('../controllers/presidents')

// http://127.0.0.1:3000/presidents
router.route('/presidents')

  //GET all presidents
  .get(getAll)

  //POST a new president
  .post(createPresident)


router.route('/presidents/:id')

  // GET return specific president
  .get(getPresident)

  // PATCH update existing president
  .patch(updatePresident)

  // DELETE remove specific president from DB
  .delete(removePresident)


module.exports = router