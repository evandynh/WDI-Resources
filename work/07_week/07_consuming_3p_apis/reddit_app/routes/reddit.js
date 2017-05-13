var express = require('express'),
  router = express.Router(),
  http = require('request')

router.get('/', function(req, res){
  http('http://reddit.com/r/funny.json', function(err, response, body) {
    if (err) throw err

    //conver JSON to a JS object
    var myResult = JSON.parse(body)

    score = myResult.data.children[1].data.score
    num_comments = myResult.data.children[1].data.num_comments
    myImage = myResult.data.children[1].data.thumbnail

    console.log('score:', score)
    console.log('num_comments:', num_comments)
    console.log('myImage:', myImage)
  })
  res.send(`<img src="${myImage}"><br><h1>This post has a score of ${score} and ${num_comments} comments.</h1>`)
})

router.get('/:n', function(req, res){
  var n = req.params.n
  http('http://reddit.com/r/funny.json', function(err, response, body){
    if (err) throw err
    var score = []
    var num_comments = []
    var myImage = []

    //convert JSON to a JS object
    var myResult = JSON.parse(body)

    if (n > myResult.data.children.length - 1) {
      n = myResult.data.children.length - 1
    }

    for(var i = 1; i <= n; i++){
      score.push(myResult.data.children[i].data.score)
      num_comments.push(myResult.data.children[i].data.num_comments)
      myImage.push(myResult.data.children[i].data.thumbnail)
    }

    var body = ''

    for(var i = 0; i < n; i++){
      body += `<img src="${myImage[i]}"><br><h1>This post has a score of ${score[i]} and ${num_comments[i]} comments.</h1><br>`
    }

    res.send(body)
  })
})

module.exports = router
