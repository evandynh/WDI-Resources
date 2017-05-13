var express = require('express'),
    router  = new express.Router();

var usersCtrl = require('../controllers/users')
    tokenCtrl = require('../controllers/token');

// User Routes
router.post('/users',
  // log
  function(req, res, next) {
    console.log();
    console.log("Request received to create user.".blue);
    next();
  },

  // validations
  usersCtrl.user.checkForFields,
  usersCtrl.user.validatePassword,
  usersCtrl.user.validateDob,
  usersCtrl.user.checkIfAlreadyExists,

  // create new user
  usersCtrl.create
);
router.get('/users', function(req, res, next) {
  console.log();
  console.log("Nearly correct request received:".blue, req.method, req.originalUrl);
  next({code: 404, message: 'Try POST!'});
})

router.get('/me',
  // log
  function(req, res, next) {
    console.log();
    console.log("Request received to get user info.".blue);
    next();
  },

  // validations
  usersCtrl.auth.checkForTokenInHeader,
  usersCtrl.auth.validateToken,

  // show current user
  usersCtrl.me
);

// Auth/Token Routes
router.post('/token',
  // log
  function(req, res, next) {
    console.log();
    console.log("Request received to create token.".blue);
    next();
  },

  // validations
  tokenCtrl.token.checkCredentials,
  tokenCtrl.token.checkUserExists,
  tokenCtrl.token.validateCredentials,

  // create a new token
  tokenCtrl.create
);
router.get('/token', function(req, res, next) {
  console.log();
  console.log("Nearly correct request received:".blue, req.method, req.originalUrl);
  next({code: 404, message: 'Try POST!'});
})
router.use('/tokens', function(req, res, next) {
  console.log();
  console.log("Nearly correct request received:".blue, req.method, req.originalUrl);
  next({
    code:    404,
    message: 'Use a singular token, for a singular resource (and POST).'
  });
})

module.exports = router;
