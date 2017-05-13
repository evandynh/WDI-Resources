var http = require('request'),
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  myImage,
  score,
  num_comments,
  redditRoutes = require('./routes/reddit')

app.get('/', function(req, res) {
  var resBody = '<h1>Reddit API App!</h1>'
  http('http://reddit.com/r/funny.json', function(err, response, body){
    if (err) throw err
    //convert JSON to a JS object
    var myResult = JSON.parse(body)
    var n = myResult.data.children.length - 1
    console.log('n is: ' + n)
    for(var i = 1; i <= n; i++){
      resBody += `<a href="/reddit/${i}">${i} Reddit post(s)</a><br>`
    }
    res.send(resBody)
  })
})

app.use('/reddit', redditRoutes)

app.listen(port, function(){
  console.log('Server listening on port', port)
})
