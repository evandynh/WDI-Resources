var express = require('express'),
  router = express.Router(),
  request = require('request')

router.get('/', function(req, res) {
  res.json({message: 'connected'})
})

router.get('/:username', function(req, res) {
  var searchString = `https://www.codewars.com/api/v1/users/${req.params.username}?access_key=7CnuimG1xyr8tRyHxUGx`
  request(searchString, function(err, response, body) {
    if (err) throw err
    var myResult = JSON.parse(body)
    res.send(`${myResult.name} is a member of the ${myResult.clan} clan with ${myResult.honor} honor.`)
  })
})


module.exports = router
