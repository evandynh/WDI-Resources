# Express Routing Lab

## Introduction

We've now seen how to write an app with Node and Express from scratch, so let's apply this concept again by creating a RESTful API using Express.

A kid has come to you with an idea for an API to keep track of his candies. You love candies!  So, you accept his proposal. You will create a resource `Candy` and use the kid's candy "data" to populate and post to your "database". 

## Exercise

#### Requirements

- Create an Express app from scratch
- This app will only respond to JSON; it is just an API, so don't worry about the views
- The resource `Candy` should be accessible via the endpoint `/candies` and be RESTful
- Implement `index`,`show`, `create`, `update`, and `destroy` functionality

**Bonus:**

- Handle wrong requests with appropriate HTTP status and responses (404, 500, 422)
- Add some validations

---

##### Step 1:

- Get a node and express app up and running.

##### Step 2:

- Add a routes file and properly connect it to your app.
- Test that it is all set-up properly.

##### Step 3:

- Create a controllers folder and a candies controller file.

	```bash
	mkdir controllers
	touch controllers/candies.js
	```
	
- Since we don't know how to connect to a database yet, let's just add some 'data' to our controller that we can play with.

	```js
	var candies = [
	  {id: 1, name: "Chewing Gum" , color: "Red"},
	  {id: 2, name: "Pez"         , color: "Green"},
	  {id: 3, name: "Marshmallow" , color: "Pink"},
	  {id: 4, name: "Candy Stick" , color: "Blue"}
	]
	```
	
##### Step 4:

- Add an index function to the candies controller and export it. This function will replace the anonymous inline function we have been using in our routes file and should look similar.
	
	```js
	function index(req, res) {
	  res.json(candies)
	}
	
	module.exports = {
	  index: index
	}
	```

##### Step 5:

- Require the candies controller in your routes file.
- Add a route to your routes file that will use the candies controller index function as its callback.

	```js
	var candiesCtrl = require('../controllers/candies');
	
	router.get('/candies', candiesCtrl.index);
	```

##### Step 6:

- Get endpoints are easy to test with our browser, we just navigate to the endpoint we are testing. How do we test other http actions, like post, delete, patch, or put?  [Postman](https://www.getpostman.com/) to the rescue.

##### Step 7:

- As we briefly talked about earlier, in order for our server to access data being sent in the request body, we need some middleware. Let's add [body-parser](https://www.npmjs.com/package/body-parser).
- How do we add the body-parser to my project?

	```bash
	npm install body-parser --save
	```

- Now let's tell our app to use it. In our server.js, near the top:
	
	```js
	var bodyParser = require('body-parser');
	```

	and in the section where we mount middleware:

	```js
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	```
	
##### Step 8:

- Add a create function to our candies controller and export it.
- Add a RESTful route that will use the create function.
- Test that it all works in Postman.

##### Step 9:

- You are on your own now. Create and test endpoints for show, update and destroy.


## Additional Resources

- [ExpressJS documentation](http://expressjs.com/4x/api.html)