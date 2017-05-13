var env = require('./environment');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + env.SAFE_TITLE);

var User = require('../models/user');

User
  .remove({})
  .then(function() {
    console.log('All users removed…');

    return mongoose.connection.close();
  })
  .then(function() {
    process.exit(0);
  });
