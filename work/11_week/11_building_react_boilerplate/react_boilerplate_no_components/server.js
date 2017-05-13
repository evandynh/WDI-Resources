var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000

app.use(express.static('public'))

app.listen(port, function() {
  console.log('App is running on port', port)
})
