// Require the Express module
var express = require('express'),
    routes = require('./config/routes'),
    bodyParser = require('body-parser')

// Create our app as an instance of Express
var app = express()

// Mount middle
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Root route to test our app
app.get('/', function(req, res){
  res.json({message: 'This works!'})
})

// Use the routes from the candies routes file - namespaced with /candies
app.use('/candies', routes)

// Define the port based on the environment
var port = process.env.PORT || 3000

// Listen on the port (run the server)
app.listen(port, function() {
  console.log('magic is happening on port', port)
})
