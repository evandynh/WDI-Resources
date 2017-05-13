// Require modules
var express = require('express'),
    routes = require('./config/routes'),
    path = require('path')

// Create the express app
var app = express()

// Middleware to serve up static assets such as images, JS, CSS, and HTML files
app.use(express.static(path.join(__dirname, 'public')))

// Uses the routes defined in our routes file
app.use('/', routes)

// Start the server listening on port 3000
var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('magic is happening on port', port)
})
