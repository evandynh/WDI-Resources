var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var cookieParser = require('cookie-parser');
var debug        = require('debug')('app:http');
var colors       = require('colors');

// *** SETUP ***

var env    = require('./config/environment');
var routes = require('./routes/routes.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + env.SAFE_TITLE);

var app = express();

app.set('title', env.TITLE);
app.set('safe-title', env.SAFE_TITLE);

app.set('secret-key', env.SECRET_KEY);

app.locals.title = app.get('title');

// *** MIDDLEWARE ***

// CORS (allows the separate client to send requests)…
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin',  '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use(logger('dev'));

app.use(favicon(path.join(__dirname, 'public', 'ga-favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// Parse the cookie, retrieve the session; load it on to the request.
app.use(cookieParser('notsosecretnowareyou'));
app.use(session({
  secret: 'anotherfoolishsecret',
  saveUninitialized: true,
  resave: true
}));

// *** API ROUTES ***
app.use(debugReq);

// Root path: returns a list of possible requests.
app.get('/api', function(req, res, next) {
  console.log();
  console.log('Request made to API root.'.blue);
  var baseUri = `${req.protocol}:\/\/${req.get('host')}\/api`;
  res.json({
    token_url: `POST ${baseUri}/token`,
    user_urls: [
      `POST ${baseUri}/users`,
      `GET  ${baseUri}/me`
    ]
  });
});

// Validation: check for correctly formed requests (content type).
app.use(['/api/users', '/api/token'], function(req, res, next) {

  if (req.get('Content-Type') === 'application/x-www-form-urlencoded') {
    next({
      status:  400,
      message: 'Make sure you are not setting your request body to be ' +
               'x-www-form-urlencoded. Use application/json (raw)'
    })
  } else if (req.get('Content-Type') !== 'application/json') {
    if (req.session.failedToSetContentType) {
      req.session.failedToSetContentType++;
    } else {
      req.session.failedToSetContentType = 1;
    }
    console.log();
    console.log('Request made without correct content type.'.blue, req.method, req.originalUrl);
    console.log(`  Failed attempt:`.green, req.session.failedToSetContentType);
    if (req.session.failedToSetContentType < 10) {
      var message = 'Request body must be JSON. Set your headers; see ' +
        'http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17';
    } else {
      var message = "Add a header where 'Content-Type': 'application/json', " +
        "and make sure that the body is formatted as 'raw', if it exists";
    }
    next({
      status:  400,
      message: message
    });
  } else {
    next();
  }
});

// Validation: check that the body is correctly formatted before failing
// to parse (replies with good errors for JSON parsing).
// app.use('/api', bodyParser.json());
app.use(
  ['/api/users', '/api/token'],
  bodyParser.text({type: '*/*'}),
  function(req, res, next) {
  if (req.body) {
    try {
      req.body = JSON.parse(req.body);
    } catch (err) {
      console.log();
      console.log('Request has a JSON body that is incorrectly formatted and failed parsing.'.blue);
      next({
        status:  400,
        message: 'Body failed to be parsed. JSON incorrectly formatted.'
      });
    }
  }
  next();
});

// Send all requests to our API router.
app.use('/api', routes);

// *** ERROR ROUTES ***

// Catches all 404 routes, either for non-existing routes
// or routes that have passed to it.
app.use(function(req, res, next) {
  next({status: 404});
});

// Error-handling layer.
app.use(function(err, req, res, next) {
  delete err.statusCode;

  switch(err.status) {
    case 400: err.title = '400 Bad Request';  break;
    case 401: err.title = '401 Unauthorized'; break;
    case 403: err.title = '403 Forbidden';    break;
    case 404: err.title = '404 Not Found';    break;
    case 409: err.title = '409 Conflict';     break;
    case 422: err.title = '422 Unprocessable Entity'; break;
    default:
      err.status = 500;
      err.title  = '500 Internal Server Error';
  }

  console.log('  >>> Error!'.red);
  console.log(err);
  res.status(err.status).json(err);
});

function debugReq(req, res, next) {
  debug('Debugging request data:'.red);
  debug('headers:'.yellow);
  debug(req.headers);
  debug('params:'.yellow);
  debug(req.params);
  debug('query:'.yellow);
  debug(req.query);
  debug('body:'.yellow);
  debug(req.body);
  next();
}

module.exports = app;
