var http = require('http'),
    // serve-favicon docs: https://github.com/expressjs/serve-favicon
    favicon = require('serve-favicon'),
    finalhandler = require('finalhandler'),
    path = require('path'),
    // if favicon doesn't change, resource: http://www.phpjunkyard.com/tutorials/force-favicon-refresh.php
    _favicon = favicon(path.join(__dirname, 'public', 'favicon.ico'))
    dateTime = new Date,
    utcDate = dateTime.toUTCString(),
    port = process.env.PORT || 3000,
    images = require('./images'),
    routes = [
      {route: '/', content: '<h1 style="text-align: center">Cheers to Sandra Bullock!</h1><a href="/about" style="display: block; text-align: center">About Sandy B.</a><a href="/movies" style="display: block; text-align: center">My Favorite Sandra Bullock Movies</a><img src="' + images.main + '" width="100%">'},
      {route: '/about', content: '<h1 style="text-align: center">About</h1><a href="/" style="display: block; text-align: center">Home</a><br><img src="' + images.about + '" width="100%"><br><p>Sandra Annette Bullock was born in Arlington, a Virginia suburb of Washington, D.C. Her mother, Helga Bullock (née Helga Mathilde Meyer), was a German opera singer. Her father, John W. Bullock, was an American voice teacher, who was born in Alabama, of Irish, English, French, and German descent. Sandra grew up on the road with her parents and younger sister, chef Gesine Bullock-Prado, and spent much of her childhood in Nuremberg, Germany. She often performed in the children\'s chorus of whatever production her mother was in. That singing talent later came in handy for her role as an aspiring country singer in The Thing Called Love (1993). Her family moved back to the Washington area when she was adolescent. She later enrolled in East Carolina University in North Carolina, where she studied acting. Shortly afterward she moved to New York to pursue a career on the stage. This led to acting in television programs and then feature films. She gave memorable performances in Demolition Man (1993) and Wrestling Ernest Hemingway (1993), but did not achieve the stardom that seemed inevitable for her until her work in the smash hit Speed (1994). She now ranks as one of the most popular actresses in Hollywood. For her role in The Blind Side (2009) she won the Oscar, and her blockbusters The Proposal (2009), The Heat (2013) and Gravity (2013) made her a bankable star. With $56,000,000, she was listed in the Guinness Book Of World Records as the highest-paid actress in the world. - <a href="http://www.imdb.com/name/nm0000113/bio?ref_=nm_ov_bio_sm">IMDb Mini Biography By: David Montgomery <djmont@aol.com></a></p>'},
      {route: '/movies', content: '<h1>My Favorite Sandra Bullock Movies</h1><a href="/practical-magic">Practical Magic</a><br><a href="/28-days">28 Days</a><br><a href="/miss-congeniality">Miss Congeniality</a><br>'},
  		{route: '/practical-magic', content: '<h1 style="text-align: center">Practical Magic</h1><a href="/" style="display: block; text-align: center">Home</a><a href="/about" style="display: block; text-align: center">About Sandy B.</a><a href="/movies" style="display: block; text-align: center">My Favorite Sandra Bullock Movies</a><img src="' + images.practicalMagic + '" width="100%">'},
  		{route: '/28-days', content: '<h1 style="text-align: center">28 Days</h1><a href="/" style="display: block; text-align: center">Home</a><a href="/about" style="display: block; text-align: center">About Sandy B.</a><a href="/movies" style="display: block; text-align: center">My Favorite Sandra Bullock Movies</a><img src="' + images.twentyEightDays + '" width="100%">'},
  		{route: '/miss-congeniality', content: '<h1 style="text-align: center">Miss Congeniality</h1><a href="/" style="display: block; text-align: center">Home</a><a href="/about" style="display: block; text-align: center">About Sandy B.</a><a href="/movies" style="display: block; text-align: center">My Favorite Sandra Bullock Movies</a><img src="' + images.missCongeniality + '" width="100%">'}
    ],
    server = http.createServer(function onRequest(req, res){
      // var done = finalhandler(req, res)

      _favicon(req, res, function onNext (err) {
        // if (err) return done(err)

        for(var i = 0; i < routes.length; i++) {
          if (req.url === routes[i].route) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(routes[i].content)
          } else if (i === routes.length -1) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end('<h1>There is no ' + req.url + ' page!</h1><img src="https://http.cat/404" width="100%">')
          }
        }

        console.log(req.method, 'A request has been made on', req.url, 'on', utcDate)
      })
    })

server.listen(port, function() {
  console.log('Our server is running on port', port)
})
