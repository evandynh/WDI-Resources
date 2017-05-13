var http = require('http'),
    {main, about, movies, practicalMagic, days, missCongeniality} = require('./content.js'),
    dateTime = new Date,
    utcDate = dateTime.toUTCString(),
    port = process.env.PORT || 3000,
    routes = [
      {route: '/', content: main},
      {route: '/about', content: about},
      {route: '/movies', content: movies},
      {route: '/practical-magic', content: practicalMagic},
      {route: '/28-days', content: days},
      {route: '/miss-congeniality', content: missCongeniality}
    ],
    server = http.createServer(function(req, res){
      for(var i = 0; i < routes.length; i++){
        if (req.url === routes[i].route) {
          res.writeHead(200, {'Content-Type': 'text/html'})
          res.end(routes[i].content)
        } else if (i === routes.length - 1) {
          res.writeHead(404, {'Content-Type': 'text/html'})
          res.end('<h1>There is no ' + req.url + ' page</h1><img src="https://http.cat/404" width="100%">')
        }
      }
      console.log('A', req.method, 'request has been made on', req.url, 'on', utcDate)
    })

server.listen(port, function(){
  console.log('Magic is happening on port', port)
})
