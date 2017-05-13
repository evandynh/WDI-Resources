# Connecting Express Routes to Mongo

*After this module, SWBAT:*

- Practice using mongoose to connect to a mongo database
- Use express's `.route()` method
- Use Postman & cURL to interact with an API

## Using a Database in a Node/Express App

This week you've learned about Node, Express, and Mongo. Now it's time to do some reps! During this module we will be filling out an app to make it work with a mongo database.

## Let's Get Started

Copy the starter code to your workspace. Then run the command needed to install all of the modules specified in the dependencies section of the package.json file. *Do not install them one by one. What is the command that will install them all?*

Next, let's walk through the starter code and see what's there. Tons of comments, that's what! They're useful and will guide us through fleshing out the app.

## `.route()`

So far we've mostly used `.get()`, `.post()`, etc. to define our routes. Express has a `.route()` method which allows us to DRY up our routes even more.

This...

```js
router.get('/', billiardsController.index)
router.post('/', billiardsController.create)
```

becomes this...

```js
router.route('/')
	.get(billiardsController.index)
	.post(billiardsController.create)
```

Using the `.route()` method means we only have to write each URI once and we can chain on additional routes.

**Important Note:** The line breaks are only for human readability - that is all one line of code with methods chained on. This meand that you **cannot** put a semicolon at the end of any line but the last.

## Postman

Postman is a useful tool which we can use to interact with APIs. While building your projects, you may want to write your models, controllers, and routes before making any views (similar to the suggested workflow from project 2). We don't have `rails c` anymore, so 

## cURL

![](https://media0.giphy.com/media/fX2XmuG4FgrTO/200.gif#2)

cURL is "a command line tool for getting or sending files using URL syntax." [source](https://en.wikipedia.org/wiki/CURL#curl)

Just like Postman, you can use cURL to interact with your API.

Try this:

```bash
curl -XGET http://localhost:3000/users
```

You should see all of your users that are currently in your database. We'll refer to that as an index request. Try a show request. What would that look like?

Try this:

```bash
curl -XPOST -H "Content-Type: application/json" -d '{"name":"Delilah","email":"dd@cats.com", "age": 3}' http://localhost:3000/users
```
That posted a new user to your API. Do another index request!

How about update? Which HTTP method should we use? *Hint: the routes. Therein lies the secret.*

```bash
curl -XPATCH -H "Content-Type: application/json" -d '{"age": 4}' http://localhost:3000/users/dd@cats.com
```

Lastly, let's delete one:

```bash
curl -XDELETE http://localhost:3000/users/dd@cats.com
```

## Additional Resources

- [Curl Manual](http://curl.haxx.se/docs/manual.html)
- [ExpressJS documentation](http://expressjs.com/4x/api.html)

## Conclusion

- What are some benefits of modularizing code into separate files?
- What is the benefit of using `.route()`?
- Do you think Postman and/or cURL will be useful tools while building your projects? Why or why not?
