# Consuming 3rd Party APIs


## Objectives

* After this lesson, SWBAT:*

* Use the node `request` module in your application
* Consume a JSON API in a node application

## Roadmap
* NODE IS THE WILD WEST
* What is an API?
* What is `request`?
* `request` vs `http`
* Set Up
* 3rd Party API
* Refactor
* Independent Practice
* Conclusion



## NODE IS THE WILD WEST

![](https://media2.giphy.com/media/Az1CJ2MEjmsp2/200.gif)

In Rails there is a **best way** to do everything. In Node... not so much. We will be showing you different ways to build apps with Node and Express.

#### But why?

Because we want to do our best to help you be prepared for a job when you leave GA. If we only showed you one way to write a MEN or MEAN stack app and then you went out into the world and found a job with a completely different structure, you might freak out!


## What is an API?

API stands for **Application Programming Interface**. APIs allow web applications to share information.

## What is `request`?
`request` is a node module used to make HTTP calls. This means that we can use `request` to communicate with third party APIs.

##`request` vs `http`
We use `request` instead of the built-in node `http` library because it is easier to use, supports HTTPS, and follows redirects by default.

More information on the `request` module can be found in the [documentation](https://www.npmjs.com/package/request).

## Set Up

Let's build a new app and consume the reddit API.

- `mkdir reddit_app`
- `cd reddit_app`
- `touch server.js`
- `npm init`

We are going to need to require both the `express` and `request` modules.

- `npm install express --save`
- `npm install request --save`

You can also install these modules in one line, like so:

`npm install express request --save`

Let's require them in our `server.js` file and build out the rest of the app basics.

``` javascript
var http = require('request'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3000
	
app.get('/', function(req, res) {
	res.send('hello, world')
})
	
app.listen(port, function(){
	console.log('Server listening on port', port)
})
```

## 3rd Party API

For this app, we're going to use the reddit API. It's very easy to use and doesn't require any tokens. The full documentation is [here](https://www.reddit.com/dev/api).

Let's use request to make an API call to reddit's funny subreddit.

```javascript
http('http://reddit.com/r/funny.json', function(err, response, body) {
	if (err) throw err
	
	// convert JSON to a JS object
	var myResult = JSON.parse(body)
	
	console.log(myResult)
})
```

That response has a lot of stuff in it. Let's drill in and get a few pieces of information: score, number of comments, and image.

```javascript
var score = myResult.data.children[1].data.score
var num_comments = myResult.data.children[1].data.num_comments
var myImage = myResult.data.children[1].data.thumbnail
```

Now let's change our console logs so our request to reddit looks like this:

```javascript
http('http://reddit.com/r/funny.json', function(err, response, body) {
	if (err) throw err
	
	// convert JSON to a JS object
	var myResult = JSON.parse(body)
	
	var score = myResult.data.children[1].data.score
	var num_comments = myResult.data.children[1].data.num_comments
	var myImage = myResult.data.children[1].data.thumbnail

	console.log('score:', score)
	console.log('num_comments:', num_comments)
	console.log('myImage:', myImage)
})
```

Instead of sending 'hello, world' for a root route get request, let's send that data from reddit.

```javascript
app.get('/reddit', function(req, res) {
	res.send('<img src="' + myImage + '"><br><h1>This post has a score of ' + score + ' and ' + num_comments + ' comments.</h1>')
})
```

Oh, no! What happened?

Remember scope? The variables created inside of our callback function are not available outside of it. Let's define them outside, then!

```javascript
var http = require('request'),
	express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	myImage,
	score,
	num_comments
	
app.get('/reddit', function(req, res) {
	res.send('<img src="' + myImage + '"><br><h1>This post has a score of ' + score + ' and ' + num_comments + ' comments.</h1>')
})

http('http://reddit.com/r/funny.json', function(err, response, body) {
	if (err) throw err
	
	// convert JSON to a JS object
	var myResult = JSON.parse(body)
	
	score = myResult.data.children[1].data.score
	num_comments = myResult.data.children[1].data.num_comments
	myImage = myResult.data.children[1].data.thumbnail

	console.log('score:', score)
	console.log('num_comments:', num_comments)
	console.log('myImage:', myImage)
})
	
app.listen(port, function(){
	console.log('Server listening on port', port)
})
```

Now, go to `localhost:3000` in Chrome and see what you see (you might have to refresh a couple of times).

## Refactor

Let's make a routes file called `reddit.js` and move all of the reddit-related code in there. Refactor!

#### What is router?

In our new routes file we don't want to create a new instance of express, so we'll just create a new instance of the express router, like so: `var router = express.Router()`

From [the docs](https://expressjs.com/en/guide/routing.html):
> A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

## Independent Practice

Add some more routes:

- root route with links to other routes
- a route to display 5 reddit posts
- a route to display 10 reddit posts

CHALLENGE!

- add a route to display `n` reddit posts based on the url 🤔
  - ex: '/reddit/16' will display 16 reddit posts

## Conclusion

- What does the `request` module do?
- How do you drill into an object?
- How did we show data from the reddit API in our app?
