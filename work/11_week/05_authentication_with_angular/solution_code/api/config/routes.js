var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var criminalsController = require('../controllers/criminals');
var usersController = require('../controllers/users');
var token = require('./token_auth');

// http://127.0.0.1:3000/criminals
router.route('/criminals')

  //GET all criminals
  .get(token.authenticate, criminalsController.getAll)

  //POST a new criminals
  .post(token.authenticate, criminalsController.createCriminal);


router.route('/criminals/:id')

  // GET return specific criminals
  .get(criminalsController.getCriminal)

  // PATCH update existing criminals
  .patch(criminalsController.updateCriminal)

  // DELETE remove specific criminals from DB
  .delete(criminalsController.removeCriminal);

router.route('/api/users')
  .post(usersController.create);
router.route('/api/token')
  .post(token.create)
router.route('/api/me')
  .get(token.authenticate, usersController.me)


module.exports = router
