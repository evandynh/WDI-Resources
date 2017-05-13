var http = require('http'),
    dateTime = new Date,
    utcDate = dateTime.toUTCString(),
    port = process.env.PORT || 3000,
    routes = [
      {route: '/', content: '<h1>Welcome to my Node app!</h1>'},
      {route: '/about', content: '<h1>Welcome to my About page!</h1>'},
      {route: '/contact', content: '<h1>Contact me!</h1>'}
    ],
    server = http.createServer(function(req, res) {
      for (var i = 0; i < routes.length; i++) {
        if (req.url === routes[i].route) {
          res.writeHead(200, {'Content-Type': 'text/html'})
          res.end(routes[i].content)
        } else if (i === routes.length - 1) {
          res.writeHead(404, {'Content-Type': 'text/html'})
          res.end('<h1>ARE YOU LOST?!?!?!</h1><a href="/"><img src="https://afv.com/wp-content/uploads/2015/01/Screen-Shot-2015-01-26-at-6.36.27-PM.png" height="100px"></a><a href="/about"><img src="http://zoonarea.com/wp-content/uploads/parser/persian-x-kitten-1.jpg" height="100px"></a><br><img src="https://http.cat/404">')
        }
      }
      console.log('A', req.method, 'request has been made on', req.url, 'on', utcDate)
    })

server.listen(port, function() {
  console.log('Our server is running on port', port)
})
