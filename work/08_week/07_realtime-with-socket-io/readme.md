![](http://www.cnydev.org/wp-content/uploads/2015/03/socketio2.png)
# Realtime with socket.io

---

## Learning Objectives

- Add and configure _socket.io_ to a Node/Express app.

- Add realtime communication between browser and server in a Node/Express app.


---

### Intro to socket.io

- The HTTP protocol does not enable bidirectional realtime communication.

- Fortunately, HTML5 included a new protocol that does - the _websocket_ protocol.

- **socket.io** is a JavaScript library that wraps the _websocket_ protocol and makes realtime bidirectional communication much easier than working with websockets directly.

- Other strategies before websockets: polling (AJAX) and [long polling](https://www.pubnub.com/blog/2014-12-01-http-long-polling/).

---

### socket.io - Basic Architecture

<img src="https://lh5.googleusercontent.com/unfpPe6OC4zzXxe89VXn0Sbmp5uQBifvTx6illIno-OofyFXm-PmMYXe5gGaokGLcu7VCJjB_koRspcneTHfjuMct9yhk_YiwX4XaLCY6O13vKzHGsQ0A8RkB_oYhzmrzFM" width="800">

- Clients can send messages to the server...

- and the server can send messages to all connected clients.

---

### What types of applications can you think of that can take advantage of realtime communications?

---

### Our Sample App: realtime-circles


- Copy the `realtime-circles` starter code to your working directory.

- `npm install`

- `nodemon` and browse to `localhost:3000`

- Clicking creates a circle of random size and color.

- Our goal is to make this a realtime multi-player circle-fest!

- Let's review the starter code...

---

### Review the Code for realtime-circles

- Inspect the following files
	- `views/index.ejs`
	- `public/javascripts/app.js`
	- `public/stylesheets/style.css`
- Answer the following questions
	- How do circles get created when you click the page?
	- What styling rules are being applied to circles?
	- How does the Clear button work? 

---

## Setting up socket.io


#### Both the client and server need to be configured with socket.io

---

## Configuring the Server

---

#### Configure the Server


1. Install socket.io

	```sh
	npm install socket.io --save
	```

2. We don't want to unnecessarily clutter _server.js_, so we're going to put our _socket.io_ related code in a separate module file.

	```sh
	touch io.js
	```

3. Set up the websocket connection (similar to how we would set up a model file).

	```js
	// io.js
	
	var io = require('socket.io')()
	
	io.on('connection', function (socket) {
	  console.log('Client connected to socket.io!')
  	})
	
	module.exports = io
	```
4. Attach socket.io to the server

	```js
	// inside bin/www
	var server = http.createServer(app)
	
	// load and attach socket.io to http server
	var io = require('../io')
	io.attach(server)
	```

  - Check that `nodemon` is running our app without errors.

  - No errors? Congrats the server is configured - time to configure the client!

---

## Configuring the Client (Browser)

1. Include the JS file that socket.io auto-generates for us

	```html
		...
    	<script src="/socket.io/socket.io.js"></script>
    	<script src="/javascripts/app.js"></script>
    </body>
	```

	- Be sure to load it before `app.js`. *Why is that important?*

2. Create a connection on the server


	```js
	// Inside app.js after this line:
	document.addEventListener("DOMContentLoaded", function() { 
	
	// Add these 3 lines:
  
  		// get our connection to the socket.io server
  		var socket = io()
  		console.log(socket)
  
  		...
	
	```   

	- The `socket.io.js` client script exposes an `io` global function that we call to obtain our connection to the server.  

---

## Test the Configuration


- Refresh the browser and verify that:

  - The `socket` object logged in the browser's console has a `connected: true` property.
  
  - The server's terminal window logged out the message<br>"Client connected to socket.io!".

---

## Displaying Circles in Realtime

---

#### Our Realtime Requirements


- We are going to code along to transform the app into a realtime multi-player circle-fest that:

  -  Displays circles created by all players in realtime.

  -  Clears all circles from all connected browsers when the `clear` button is clicked (a practice exercise).

---
## How does socket.io work?

- Socket.io works like a chat system between the server and browser. 
- The browser can both send and receive messages
- Messages have a topic that indicate what type of message they are
- You can subscribe to topics and be notified every time a new message arrives

---

### Displaying Circles - Server Code


- This code for _io.js_ will accomplish the goal for our server's code logic:

	```js
	// io.js
	io.on('connection', function (socket) {
		//new code in here
   		socket.on('add-circle', function (data) {
      		io.emit('add-circle', data)
   		})
	})
	```

- Here on the server, `io` represents the server and `socket` a client.

---

### Displaying Circles - Server Code


- With that code in place:

	- When a client (`socket`) connects to the server, we're using the `on` method to set up a listener on the server to listen to messages sent **from** that client.

	- When the server receives an `add-circle` message from the client, the callback function will send the same message to all clients using the server's (`io`) `emit` method.

---

### Displaying Circles - Client Code

- Listen for an `add-circle` message from the server in `app.js`:

	```js
	var socket = io()	
  	// listen to the server for the `add-circle` event
  	socket.on('add-circle', function (data) {
   		console.log(data)
  	})
	```

- Here on the client (browser), we have the `socket` object representing our realtime connection to the server.

- For now, we're simply logging out data received from the server - baby steps :)

---

### Displaying Circles - Client Code (cont.)

- Now let's update the click event listener to emit an `add-circle` message with the data when user clicks:

	```js
  	circles.addEventListener('click', function(evt) {
  		// new code below
    	socket.emit('add-circle', {
      		initials: initials,
      		x: evt.clientX,
      		y: evt.clientY,
      		dia: randomBetween(10,100),
      		rgba: getRandomRGBA()
    	})
    	// new code above
  	})
	```

---

### Displaying Circles - Messaging Check

To recap, our code so far:

1. Emits `add-circle` messages and data to the server when a user clicks.

2. Receives `add-circle` messages emitted from the server and console logs their data.

- <p>Let's open two browsers on <em>localhost:3000</em> and make sure our console shows the messages as we click!</p>

---

### Displaying Circles - Client Code (cont.)

```js
// Refactor addCircle to draw directly from data
// was -> function addCircle(x, y, dia, rgba) {
function addCircle(data) {
	var el = document.createElement('div')
	el.style.left = data.x - Math.floor(data.dia / 2 + 0.5) + 'px'
	el.style.top = data.y - Math.floor(data.dia / 2 + 0.5) + 'px'
	el.style.width = el.style.height = data.dia + 'px'
	el.style.backgroundColor = data.rgba
	el.style.fontSize = Math.floor(data.dia / 3) + 'px'
	el.style.color = 'white'
	el.style.textAlign = 'center'
	el.style.lineHeight = data.dia + 'px'
	el.innerHTML = data.initials
	circles.appendChild(el)
}
```

---

### Displaying Circles - Client Code (cont.)

- All that's left is to call the `addCircle()` function from our `socket.on` listener inside `app.js`:

	```js
  	// listen to the server for the `add-circle` event
  	socket.on('add-circle', function (data) {
   		// console.log(data)
   		addCircle(data)
  	})
	```

- Use two browsers with different initials and test drive that sucka!


---

### Practice: Clear All Circles

- Partner up and make the `clear` button clear all connected user's displays instead of just yours.

- Hints: This will require another event message in addition to the `add-circle` event message.


---

## Deploy to Heroku


- **Set aside your fears and:**
  1. Create a local git repo: `git init`
  2. Add all files: `git add -A`
  3. Commit: `git commit -m "Initial commit"`
  4. Create a Heroku deployment: `heroku create`
  5. Deploy your repo to Heroku: `git push heroku master`
  6. Once deployed, open the app: `heroku open`
  7. Share your link with a classmate and see how it works with two separate users, not just two separate browser windows!
  
  <!--8. Make sure you are logged in to Heroku: `heroku login`
  9. Ensure that at least one instance is running: `heroku ps:scale web=1` -->


---

## Questions

- **What is the name of the method used to send messages from the server to the client and vice versa?**

- **What method is used to set up a listener for a message?**

- **What are the names of the event messages available to us in this app?**


---

## References

- [Socket.IO](http://socket.io/)

- [WebSockets Protocol](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
