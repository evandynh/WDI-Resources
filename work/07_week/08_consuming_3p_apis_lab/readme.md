# Consuming 3P APIs Lab

## Set Up

Last module we used the reddit API to get some sweet, sweet data. Now let's build a new app and consume the giphy API!

Oh, giphy API, you're sweet data blows my mind, hey giphy!

![](https://media3.giphy.com/media/wsxZft3JesKf6/200.gif)

``` bash
mkdir giphy_app
cd giphy_app
touch app.js
npm init
npm install express --save
npm install request --save
```

## Create a Giphy Router

```bash
mkdir routes
touch routes/giphy.js
```

Just like the routes files we built when refactoring the reddit app, we need to require express and export the routes. However, we're also going to require the request module, which will help us access a third-party API.

```javascript
var express = require('express'),
    router = express.Router(),
    request = require('request')
	
module.exports = router
```

Just like with other routes files, we need to require this file in app.js.

```javascript
var giphyRoutes = require('./routes/giphy')

app.use('/giphy', giphyRoutes)
```

#### Check out the API docs!

Always make sure to read the docs before using an API in your project.

<https://api.giphy.com/>
<https://github.com/Giphy/GiphyAPI>

Look through the docs and find the "public beta key" so we can access the API!

#### Add a route to show gifs from giphy

Let's add a route so we can display gifs from giphy in our app.

```javascript
router.get('/:query', function(req, res) {
	var searchString = "http://api.giphy.com/v1/gifs/search?q=" + req.params.query + "&api_key=dc6zaTOxFJmzC"
	request(searchString, function(err, response, body){
		var imageSource = JSON.parse(body).data[0].images.fixed_height.url
		res.send('<img src="' + imageSource + '">')
	})
})
```

Now go test it in your browser! What route must you type in to get a gif of a cat?

## More Practice

So far today you have consumed two different third-party APIs. Are you ready for one more?

![](https://media1.giphy.com/media/QW5nKIoebG8y4/200.gif)

#### Code Wars
- Check out the [docs](http://dev.codewars.com/#api-reference) for the Code Wars API
- Add another router for Code Wars
- Using the docs as guidance, find your **API ACCESS TOKEN**
- Access information from your Code Wars profile and include it in your `res.send()`
  - *Hint:* Usernames are case sensitive. Ex: my username is `KateWood` **not** `katewood`
- Access information from your seatmate's Code Wars profile and include it in your `res.send()` (do not include your profile information in this)
- Make a single route that could take a username and send back the corresponding Code Wars profile information