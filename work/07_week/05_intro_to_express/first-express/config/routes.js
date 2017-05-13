var express = require('express'),
    // Creates a new instance of the express Router
    router = express.Router()

// Define a root route
router.get('/', function(req, res) {
  var msg = req.query.msg ? req.query.msg : '!'
  res.send('<h1>Hello Express ' + msg + '</h1>')
})

// This is a POST, so it can't be tested in the browser! Test it in Postman!
router.post('/', function(req, res) {
  res.json({msg: "There's no database yet :("})
})

// This route returns JSON!
router.get('/goodbye', function(req, res) {
  res.json({msg: 'Goodbye, World!'})
})

// This is a named route (it has a variable)
router.get('/goodbye/:name', function(req, res) {
  res.send('Goodbye, ' + req.params.name)
})

// This makes the router (and its routes) available in other fiels when they require this file
module.exports = router
