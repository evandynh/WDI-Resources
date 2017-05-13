# Creating a Node App

### Objectives
*After this lesson, students will be able to:*

- Create a router by hand
- Add logging in your app
- Understand the difference between front end & back end console logs
- Describe nodemon and why it's useful
- Create a custom 404 message

### Preparation
*Before this lesson, students should already be able to:*

- Explain what Node.js is & why it exists
- Require modules using the `require` keyword

## Creating a NodeJS app - Intro

In this lesson, we will talk about routing and logging by hand. Later in this unit you will be using a package called `morgan`, but...  
![](https://media3.giphy.com/media/vgAT4xB7Hjv6o/200.gif)

## Setting up a new node app - Codealong

#### Basic set up

In rails, we used `rails new <app_name>` and *then* `cd <app_name>`. With node, we're going to do it the other way.  
![](https://media3.giphy.com/media/3o6gaYpCy25SPkchSE/200.gif)

```bash
mkdir node_router
cd node_router
touch server.js
npm init
```
You can review each part of the `npm init`, or force it with `npm init -f`. You can always change things later in your `package.json`.  

Now, let's check out our `package.json` file that was just generated.

## Creating a router - Codealong

#### Add the http module

We're going to use a node module called `http` for our router. Normally, we would install all packages we want using `npm` and include `--save` so that they're added to our dependencies in our `package.json` file; however, `http` is already built in to node, so we just have to require it in `server.js`.

```javascript
var http = require('http')
```

We also need to add some more variables to create our router:

```javascript
var dateTime = new Date,
    utcDate = dateTime.toUTCString(),
    port 	= process.env.PORT || 3000,
    server = http.createServer(//code here)
```

Let's fill in that `//code here` portion!

```javascript
    server = http.createServer(function(req, res) {
		if (req.url === '/') {
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.end('<h1>Welcome to my Node app!</h1>')
		}
		console.log(req.method, 'A request has been made on', req.url, 'on', utcDate)	
	})
```

One more step before running our app is to tell the server to listen. Put this at the bottom of your server.js file.

```javascript
server.listen(port, function() {
	console.log('Our server is running on port', port)
})
```

Run `node server.js` in your terminal. If everything is working, you should see "Our server is running on port 3000" console logged in your terminal. That's some custom logging!

Now, visit localhost:3000 in your browser. Check out the new line that was console logged in your terminal! We're logging left and right!

WAIT! The console.logs show up in the TERMINAL?!

![](https://media0.giphy.com/media/l0MYEqEzwMWFCg8rm/200.gif)

WE NEED TO TALK ABOUT THIS!

#### Nodemon

(Re)introducing [nodemon](https://github.com/remy/nodemon) - now, you don't have to keep restarting the server, it does it for you!

` nodemon -v ` will tell you if you have nodemon installed already. If not...

```
npm install nodemon -g
```

Another syntax is:

```
npm install -g nodemon
```

The `-g` here has basically installed nodemon globally.

You start the app now with:

```
nodemon server.js
```

The entry point of this app is defined in the `package.json` file as `server.js`, so you can shorten this command to simply `nodemon`.

## Add another route - Independent Practice

We already have a root route; let's add another one.

Make another route for the URI '/about'. Have that page display "This is the about page."

Not sure where to get started? *Hint*: our root route is in an `if` statement.

## Add a custom 404 message - Codealong

We now have routes for '/' and '/about'. What happens in the browser if you visit '/contact' or '/hello'? Nothing changes! Let's add a custom 404 message so that visitors to our site will know when they've gone to a page that we haven't set up.

## Conclusion

Take five minutes to think about at least one of these questions and write down your answer. We'll discuss each of these as a group.

- Why do we use `--save` when we install a node module?
- What does `require('http')` do?
- Can we `require` code that we write ourselves?
- What is the simplest way to debug a node app?
