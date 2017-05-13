var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  giphyRoutes = require('./routes/giphy'),
  codeWarsRoutes = require('./routes/code_wars')

app.use('/giphy', giphyRoutes)
app.use('/code_wars', codeWarsRoutes)

app.listen(port, function(){
  console.log('Magic is happening on port', port)
})
