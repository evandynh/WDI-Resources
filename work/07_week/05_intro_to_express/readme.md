![](http://www.softwaresecured.com/wp-content/uploads/2015/04/express-js.jpg)
<br>
# Intro to the Express Framework for Node

## SWBAT

- Create a basic app from scratch with the Express framework
- Create and mount Express routes
- Describe the request/response cycle in an Express app
- `require` and mount middleware


### Express Framework - Intro

- Express is the most popular web framework for Node.js.

- It is a minimalistic and lightweight, especially when compared to a massive framework such as Rails.

- Express uses Node's built-in HTTP server, but extends its capability by giving us the ability to:
	- Define Routes
	- Add functionality with third-party Middleware
	- Define our own Custom Middleware
	- Use View Engines to Render Views

### Set Up our App

- Create a directory and cd into it:

	```bash
	$ mkdir first-express
	$ cd first-express
	```
- Create our entry point: 

	```bash
	touch server.js
	```
	
- Create our `package.json` with all the defaults:

	```bash
	$ npm init -f
	```

- Open the project in your text editor:
	
	```bash
	atom .
	```

### Install the Express Module

- Use `npm` to install the Express module in this project:

	```bash
	$ npm install express --save
	```

- The `--save` option adds express to the dependency section of our `package.json` file.

### Basic Structure of an Express App

- Here is a helpful outline of what we need to do in our main Express app file. To test our setup, let's make our app return "Hello World!" when we browse to `localhost:3000`. In `server.js`:

	```js
	// Require modules
	var express = require('express') 

	// Create the Express app
	var app = express() 

	app.get('/', function(req, res) {
	  res.send('<h1>Hello World!</h1>') 
	}) 


	// Tell the app to listen on port 3000
	var port = process.env.PORT || 3000 
	app.listen(port, function() {
		console.log('magic is happening on port ' + port) 
	}) 
	```

- In terminal run `nodemon`. (ctrl+c will quit the server - just like with rails s!) and then browse to `localhost:3000`

- Awesome! That is the basic config for your server. In the future you will revisit this and make all sorts of awesome modifications depending on your needs!

### Update Our First Route

- Now let's update our route to return "Hello Express" instead of "Hello World":

	```js
	app.get('/', function(req, res) {
	  res.send('<h1>Hello Express</h1>') 
	}) 
	```

- Looking at our first route in Atom, note that we are defining a route using the `get` method on the Express `app` object. Later, we will learn a preferred way of defining routes using the Express `Router` object, but you need to be aware of defining routes this way because you will see it quite often.

- Besides the `get` method, there are other methods such as `post`, `put`, `patch` and `delete`, that map to the other HTTP verbs.

- In the case of our first route, we have specified an HTTP method of `get` and a path of `/`.

- Only HTTP **get** requests matching a path of `/` (root path) will invoke the callback function.

	```js
	app.get('/', function(req, res) {
	  res.send('<h1>Hello World</h1>') 
	}) 
	```

### The Route's Callback

- Again, looking at our first route:

	```js
	app.get('/', function(req, res) {
	  res.send('<h1>Hello World</h1>') 
	}) 
	```

- The route's callback function will be executed if a matching HTTP request comes along.

- Don't forget, instead of an anonymous function for the callback, we can always use a named function, or even a `require` that returns a function.

- The route's callback function has two parameters, the first representing the [request](http://expressjs.com/api.html#req) object, the second the [response](http://expressjs.com/api.html#res) object:

	```js
	app.get('/', function(req, res) {
	  res.send('<h1>Hello Express</h1>') 
	}) 
	```

- These two arguments are automatically provided to the callback by Express.
  - The `request` object has properties and methods pertaining to the HTTP request and we use the `response` object primarily to send back our app's response to the request.

- Because they are just parameter names, you can change them. For example, feel free to use `request` for `req` and `response` for `res`:

	```js
	app.get('/', function(request, response) {
	  response.send('<h1>Hello Express</h1>') 
	}) 
	```

### Practice (2 mins)<br>Define a Simple Route

- Define another route that matches a `get` request to a path of `/goodbye` that sends a text response of "Goodbye World".

- Test your new route by browsing to `localhost:3000/goodbye`.

### Question - Basic Routing

- **Is it okay to define more than one route on the same path?<br>For example:**

	```js
	app.get('/cars', function(req, res) {
  		res.send("Here's a list of my cars...") 
	}) 

	app.post('/cars', function(req, res) {
  		res.send('Thanks for the cars!') 
	}) 
	```
	
### Request Parameters

- Remember the `params` hash in Rails? Well, the _request_ object in Express has a `params` object.

- **However**, it only contains the parameters contained in _named routes_:

- Let's add another route:

	```js
	app.get('/goodbye/:name', function(req, res) {
  		res.send('Goodbye, ' + req.params.name) 
	}) 
	```

### Query String Values

- Who remembers **what a `query string` is?**

- In Express, we can access them in our route handlers using the `query` object attached to the _request_ object. Let's modify our root route to try this out:

	```js
	app.get('/', function(req, res) {
	  var msg = req.query.msg ? req.query.msg : '!' 
  	  res.send('<h1>Hello Express ' + msg + '</h1>' ) 
	})
	```

- **What can we type in the address bar to test this out?**

### Ways to Respond to a Request

- So far we have responded in our route handler (callback) code by using the `send` method on the _res_ (response) object.

- Here is a list of other methods that can be used to terminate the request/response cycle:
  - `res.json()` - Send a JSON response
  - `res.jsonp()` - Send a JSON response with JSONP support
  - `res.redirect()` -	Redirect a request
  - `res.render()` - Render a view template
  - `res.send()` - Send a response of various types
  - `res.sendFile()` - Send a file as an octet stream

- Later in the unit we will talk about rendering views and templates with express and ejs. Right now let's just respond with JSON.

- Let's change our `/goodbye` route to return `json` instead of plain text:

	```js
	app.get('/goodbye', function(req, res) {
  		res.json( {msg: 'Goodbye World'} ) 
	}) 
	```

- Try it out!

## Best Practice Routing

### The Express <em>Router</em> Object

- In our `first-express` app, we used Express' `app.get` and `app.post` methods to mount our routes.

- Express also provides a `Router` constructor function that we can use to create instances of a router.

- The router objects can then be used to provide more flexible and powerful routing.

- There are a few different ways to utilize the Express Router Object. Later in the week, we will go over a pattern that modularizes your routers.
- You can make one routes file, or separate files for each resource. Let's make one file this time.
- From the root of our project, let's make a config folder and a file called routes.js inside of it.

	```bash
	mkdir config
	touch config/routes.js
	```

### The Routes File

- Inside our routes file, let's bring in express, create a router, and export it.

	```js
	var express = require('express') 
	var router = express.Router() 
	module.exports = router 
	```

### Add some routes and change server.js

- Let's add our routes:

	```js
	var express = require('express') 
	var router = express.Router() 
	
	router.get('/', function(req, res) {
	  var msg = req.query.msg ? req.query.msg : '!' 
	  res.send('<h1>Hello Express ' + msg + '</h1>' ) 
	}) 
	
	router.get('/goodbye', function(req, res) {
	  res.json( {msg: 'Goodbye World'} ) 
	}) 
	
	router.get('/goodbye/:name', function(req, res) {
	  res.send('Goodbye ' + req.params.name) 
	}) 

	module.exports = router 
	```
	
- Now let's change our `server.js` file to use our newly created router object. Near the top, where it says require modules in `server.js`:

	```js
	var routes = require('./config/routes') 
	```

- And where our routes used to be mounted:

	```js
	app.use('/', routes) 
	```
	
- <p>It's important to understand that the path specified in the `app.use` is **combined** with the path specified on the router objects...</p>

Let's talk about *namespacing*.

### Pledge to Use RESTful Routes

- Although MEAN Stack apps have very little convention, pledge that you will define RESTful routes whenever possible.

- Thank you!  
![thank you](https://media.giphy.com/media/TlK63EXvLD0en57UJDa/giphy.gif)

### Express Middleware

- Middleware are functions that execute on each request made to the server.

- You can have any number of middleware that will process the request one by one in the order they were _mounted_ with `app.use()`.

- Middleware can be used to log info, compile css, do authentication, make changes to the req/res object, end the request-response cycle, etc.

- Once a piece of middleware has done its job, it either calls `next()` to pass control to the next middleware in the pipeline **or** ends the request.

### The Request/Response Cycle in Express

<img src="http://adrianmejia.com/images/express-middlewares.png" width="900">

### Adding our own Middleware

- Just to demonstrate, let's write and mount a simple middleware to log out the `user-agent` of each request:

	```js
	// Use middleware (app.use)
	// Be sure to mount before routes
	app.use(function(req, res, next) {
	  console.log(req.headers['user-agent']) 
	  next() 
	}) 
	```

- Note that we must call the `next` function that is passed in after the middleware has accomplished its task  - otherwise our app stops dead in its tracks!

- Restart, refresh - neato!

### Common Express 4.0 Middleware

- __morgan__: Logger that logs requests.

- __body-parser__: Parses the body so that you can access data being sent in the request body with the `req.body` object.

- __cookie-parser__: Populates the `cookies` object on the _request_ object so that you can access data in cookies. For example, `req.cookies.name`. _cookie-parser_ is middleware which deals with the incoming _request_. To __set__ a cookie, you would use the `cookie` object on the _response_ object.

- __serve-favicon__: Serves the favicon from route _/favicon.ico_.

### Middleware

- Based upon the last section, it should be clear that we need to mount the **body-parser** middleware. But let's take a look at [Express's docs pertaining to middleware](http://expressjs.com/guide/using-middleware.html).

- Let's look at the section entitled **Built-in middleware**. Interestingly, since version 4.x, Express no longer includes its own middleware (with the exception of `express.static`). Instead, Express expects its developers to choose from the numerous modules available to install.

- Before we install **body-parser**, let's mount Express' `express.static` middleware so that when the client requests any static assets, such as CSS, JavaScript, images or HTML files, it will immediately find and send the requested asset to the client:

	```js
	app.use(express.static(path.join(__dirname, 'public'))) 
	```

- That's all there is to it! Now, all we have to do is put our static assets into a folder named `public` and the middleware will return the asset when it is requested by the browser.

- Let's check this out...

- Let's create a `public` folder and an `about.html` file inside of it:

	```sh
	$ mkdir public
	$ touch public/about.html
	$ echo "<h1>About Page</h1>" >> public/about.html
	```

- Restart the server and browse to `localhost:3000/about.html` to test it out.

- Note that we do not include "public" when specifying the path to the resource.

## References

<p style="text-align:left"><em>Note: When searching for info on the Express framework, be sure that you search for the info for version 4 only - there were significant changes made from earlier versions.</em></p>

- [Express](http://expressjs.com/)

- [If you want a headstart on rendering views with ejs](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
