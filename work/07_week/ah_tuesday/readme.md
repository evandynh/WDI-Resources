# After Hours!

![:image](http://www.mixcrate.com/img/ugc/covers/1/0/10311513_l.jpg?v=219201637)

## Option 1 - Change it up!

Go back to the [node reps lab](../04_node_reps_lab) from this morning and add Express! Reconfigure the app to work the same way in the browser, but use Express instead of the http module.

## Option 2 - More Reps!

If you weren't completely comfortable with the [express blog](../05_intro_to_express/express-blog) from this afternoon, build another app using the same tools, but make it an app all about dragons!

![](https://media0.giphy.com/media/3o7TKrEzvLbsVAud8I/200.gif#1)

## Option 3 - Module and Routing Practice!

Today we dove into Node, Express, and the module ecosystem.

Tonight you'll get practice creating JavaScript files, requiring modules, and creating routes files for an express app.

*These aren't RESTful routes, but that's okay. This is practice creating routes.*

### Setup

- make a new directory in your workspace and cd into it
- create a `server.js` file inside that directory
- run `npm init`
- `atom .`
- add the express module and require it in `server.js`
- Create a `routes` directory
- Write a routes file for each code snippet
- If any section requires you to write additional modules, put them in a `lib` folder

### Instructions

Each code snippet below is an HTTP request and what the response should be.
Create routes that will handle each request and send back the correct response.

#### Example

```
GET '/' => "Hello and Welcome!"
```

This is a "GET" request to the root that should return "Hello and Welcome!"

```js
// server.js
app.get('/', function(req, res) {
   res.send("Hello and Welcome!") 
})
```

Or we can extract that route into a separate file

We'd create a routes file that handles each route and then __exports__ it.

```js
// routes/welcome.js
var express = require('express')
var router = express.Router()
router.get('/', function(req, res){
    res.send("Hello and Welcome!") 
})
module.exports = router
```

Inside `server.js` we'd __require__ the router and give it to app to use.

```js
// server.js
var express = require('express'),
    port = process.env.PORT || 3000,
    welcome = require('./routes/welcome.js'),
app.use('/', welcome)
app.listen(port, function() {
    console.log('Listening on port', port)
})
```

## Part 1

A. 

```
POST '/ping' => "PONG"
GET '/pong'  => "PING"
```

B.

```
GET '/eight_ball' => "Are you sure?" || "All signs point to YES" || etc
```

C.

```
GET '/rps' => 'ROCK' || 'PAPER' || 'SCISSORS'
```

D.

```
GET '/greeting' => "Hello!"
GET '/greeting?lang=en' => "Hello!"
GET '/greeting?lang=fr' => "Bonjour!"
GET '/greeting?lang=de' => "Guten Tag!"
```

E.

```
GET '/search?q=yellow+jackets' => "You searched for yellow jackets"
```

F.

```
GET '/color?name=blue'   => '<h1 style="background: blue">Blue</h1>'
```

> Can you make the above work with `color`, `colors`, `colours` and `colour`?

G.

```
GET '/auth/google?code=123'  => "Log in with google and 123"
GET '/auth/twitter?code=321' => "Log in with twitter 321"
```

### Part 2

Rather than writing all the code in your routes files, can you refactor
it into modules that get __required__ in your routes?

Imagine the following in an `server.js`

```js
// server.js
app.get('/random', function(req, res){
    var number = Math.floor( Math.random() * 10 )
    res.send(number)
})
```

Refactor the above into three files.

- a module that generates a random number.
- a routes file that requires that module and returns a response
- `server.js`

### Bonus

Moment.js is a JavaScript library for displaying dates in JavaScript.

Can you use it to format dates? 

```
GET '/news/2016/11/06' => "News for Sunday, November 6th, 2016"
```

If you include `relative=true` as query parameters can you send back
a relative time?

```
GET '/news/2016/11/06?relative=true' => "News from two days ago"
```

Can you refactor this app to use controllers, too?

### Resources

- http://expressjs.com/en/api.html#req.query
- http://expressjs.com/en/api.html#req.params
- http://expressjs.com/en/api.html#router
- http://expressjs.com/en/api.html#express