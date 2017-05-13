var express = require('express'),
  router = express.Router(),
  request = require('request')

router.get('/', function(req, res) {
  res.json({message: 'connected!'})
})

router.get('/:query', function(req, res) {
  var searchString = `http://api.giphy.com/v1/gifs/search?q=${req.params.query}&api_key=dc6zaTOxFJmzC`
  request(searchString, function(err, response, body) {
    var imageSource = JSON.parse(body).data[0].images.fixed_height.url
    res.send(`<img src="${imageSource}">`)
  })
})

module.exports = router
