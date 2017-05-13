# MEANbean coffee shop
A cheatsheet by Ira Herman

---

**Back End:** Node, Express, Mongo<br>
**Front End:** Angular

## Part 1: Back End API:

1. `mkdir meanbean`
1. `cd meanbean`
1. `touch server.js` 
1. `npm init` (accept defaults)
1.  `npm i -S express body-parser mongoose morgan`

### Create your model:

1. `mkdir models`
1. `touch models/bean.js`
1. Add the following to your `bean.js`:

```js
var mongoose = require('mongoose')

//create bean schema
var beanSchema = new mongoose.Schema({
  name: String,
  quantity: Number
})

//sets variable for model
var Bean = mongoose.model('Bean', beanSchema)

//exports module
module.exports = Bean

```

---

### Create your controller:

1. `mkdir controllers`
1. `touch controllers/beans_controller.js`
1. Add the following to your `beans_controller.js`:

```js
var Bean = require('../models/bean.js')

// GET /api/beans
// INDEX action to display all beans
function index(req, res) {
	Bean.find({}, function(err, beans){
    	// return 404 if there's an error:
    	if(err) res.status(404).send(err)

    	// otherwise send json back with 200 success header:
    	res.status(200).send(beans)
	})
}

// POST /api/beans
// CREATE action to add a new bean
function create(req, res, next) {
	var bean = new Bean(req.body)

	bean.save(function(err, bean) {
	    // return 500 if there's an error:
	    if(err) res.status(500).send(err)

	    // otherwise send bean json back with 201 create success header:
	    res.status(201).send(bean)
	})
}

// GET /api/beans/:id
// SHOW action to return a single bean
function show(req, res) {
	Bean.find({_id: req.params.id}, function(err, bean){
	    // return 404 if there's an error:
	    if(err) res.status(404).send(err)

	    // otherwise send bean json back with 200 success header:
	    res.status(200).send(bean)
	})
}

// PATCH /api/beans/:id
// UPDATE action to update a single bean
function update(req, res) {
	Bean.findById({_id: req.params.id}, function(err, bean) {
		// Return 404 if bean not found:
		if(err) res.status(404).send(err)

		// Only update attributes submitted, don't null anything out:
	    if(req.body.name) bean.name = req.body.name
	    if(req.body.quantity) bean.quantity = req.body.quantity

	    bean.save(function(err) {
			// return 500 if there's an error:
		    if(err) res.status(500).send(err)
	
		    // otherwise send bean json back with 200 success header:
		    res.status(200).send(bean)
	    })
	})
}

// DELETE /api/beans/:id
// DESTROY action to delete a single bean
function destroy(req, res) {
	Bean.remove({_id: req.params.id}, function(err){
    // return 500 if there's an error:
    if(err) res.status(500).send(err)
	    // otherwise send bean json back with 200 success header:
	    res.status(200).send({message: "Bean deleted successfully"})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}

```

---

### Create your routes:

1. `mkdir config`
1. `touch config/bean_routes.js`
1. Add the following to your `bean_routes.js`:

```js
var {index, create, show, update, destroy} = require('../controllers/beans_controller.js'),
	express  = require('express'),
	router   = express.Router()

// /api/beans/ routes:
router.route('/')
	.get(index)
	.post(create)

// /api/beans/:id routes:
router.route('/:id')
	.get(show)
	.patch(update)
	.delete(destroy)

module.exports = router

// NOTE: This object destructuring (line 1) is useful for drying up code.
// It will only work with nodejs versions > 6.0
// Also it will work only if you either use different routes files for each resource
// or if you name the functions differently in your routes files
// ex: 'getAllUsers' instead of 'index'

```

---

### Add the following to your server.js:

```js
var express   = require('express'),
	app         = express(),
	logger      = require('morgan'),
	bodyParser	= require('body-parser'),
	mongoose    = require('mongoose'),
	port        = process.env.PORT || 3000,
	beanRoutes  = require('./config/bean_routes.js')

//establish connection to mongo database
mongoose.connect('mongodb://localhost/meanbean')

//log requests made to the app
app.use(logger('dev'))

//make json objects available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//mount beanRoutes at /api/beans
app.use('/api/beans', beanRoutes)

//run the web server
app.listen(port, function(){
	console.log('Server started on', port)
})

```

### Test it out:
Now run `nodemon` and test your CRUD actions using postman.

### Mount a static `public` folder for our Front End:

1. `mkdir public`

Then in your `server.js`, add the following lines:

```js
//mount 'public' folder as '/'
app.use(express.static('public'))
```

this should be just before the app.listen, like this:

```js
...

//mount 'public' folder as '/'
app.use(express.static('public'))

//run the web server
app.listen(port, function(){
	console.log('Server started on', port)
})
```


## Part 2: Front End SPA:

Create our directories:

1. `mkdir public/js`
1. `mkdir public/css`
1. `mkdir public/beans_templates`

---

Create our files:

1. `touch public/index.html`
1. `touch public/js/app.js public/js/beans_controller.js`
1. `touch public/css/style.css`
1. `touch public/beans_templates/index.html public/beans_templates/new.html`

### Add to your `public/index.html`:

```html
<!DOCTYPE html>
<html ng-app="beansApp">
	<head>
		<meta charset="utf-8">
		<title>MEANbean Coffee Shop</title>
		<link rel="stylesheet" href="css/style.css">
    <!-- load angular -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
    <!-- load ui-router -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.2/angular-ui-router.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/beans_controller.js"></script>
	</head>

	<body ng-controller="BeansController as beansCtrl">
		<nav>
      MEANbean coffee shop |
			<a ui-sref-active="active" ui-sref="index">Home</a> |
			<a ui-sref-active="active" ui-sref="new">New Bean</a>
		</nav>

    <hr>
		
		<main ui-view>
			<!-- angular ui.router will insert page template here: -->
		</main>

	</body>
</html>

```

---

### Add to your `public/js/app.js`:

```js
angular
  .module('beansApp', ['ui.router'])
  .config(BeanRouter)

BeanRouter.$inject = ['$stateProvider', '$urlRouterProvider']
function BeanRouter($stateProvider, $urlRouterProvider){

  // Front end routes using angular ui.router:
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'beans_templates/index.html'
  })
  .state('new', {
    url: '/new',
    templateUrl: 'beans_templates/new.html'
  })
  .state('show', {
    url: '/beans/:id',
    templateUrl: 'beans_templates/show.html'
  });

  // Default (fallback) route:
  $urlRouterProvider.otherwise('/')

}
```

---

### Add to your `public/js/beans_controller.js`:

```js
angular.module('beansApp')
.controller('BeansController', BeansController)

BeansController.$inject = ['$http']
function BeansController($http){
  var self = this
  self.all = []
  self.newBean = {}

  self.addBean = addBean
  self.getBeans = getBeans
  self.deleteBean = deleteBean

  // Prepopulate self.all with beans from API
  getBeans()

  function getBeans(){
    $http
      .get('/api/beans')
      .then(function(response){
        self.all = response.data
    })
  }

  function addBean(){
    $http
      .post('/api/beans', self.newBean)
      .then(function(response){
        getBeans()
    })
    self.newBean = {}
  }

  function deleteBean(bean){
    $http
      .delete("/api/beans/" + bean._id)
      .then(function(response){
		 getBeans()
      })
  }

}
```

---

### Add to your `public/beans_templates/index.html`:

```html
<h1>Listing all Beans:</h1>
<ul id="beans">
  <li ng-repeat="bean in beansCtrl.all" data-id="{{bean._id}}">
    <strong>{{bean.name}}</strong> | {{bean.quantity}} lbs in stock
    <button ng-click="beansCtrl.deleteBean(bean)">X</button>
  </li>
</ul>
```

---

### Add to your `public/beans_templates/new.html`:

```html
<form ng-submit="beansCtrl.addBean()" id="newBean">
  <div>
    <label for="newBean-name">Name:</label>
    <input type="text" id="newBean-name" ng-model="beansCtrl.newBean.name" placeholder="irKat's blue ocean roast">
  </div>
  <div>
    <label for="newBean-quantity">Quantity:</label>
    <input type="text" id="newBean-quantity" ng-model="beansCtrl.newBean.quantity" placeholder="Quantity in lbs">
  </div>
  <div>
    <input type="submit" value="Add Bean">
  </div>
</form>
```

---

### Add to your `public/css/style.css`:

```css
.active {
  text-decoration: none;
  background-color: black;
  color: white;
  padding: 4px;
}
```

---

### Try it out!
Now visit http://localhost:3000 in your web browser.

* Try adding a few new beans
* Go to Home and see if it lists your beans

## Next Steps
Your api supports all the rest actions. Maybe you'll want to add an edit/update page or a show page.

## BONUS Content:
### Redirecting to another page (state):
If you would like any actions or functions to redirect the user to a different page (state):

1) Inject `$state` into the controller you want to add the redirect code to:

```js
...

BeansController.$inject = ['$http', '$state']
function BeansController($http, $state){

...
```

2) Use `$state.go('<name-of-state-from-ui-router-routes>')` to redirect to that state:

```js
...

 function addBean(){
    $http
      .post('/api/beans', self.newBean)
      .then(function(response){
        getBeans()
                
        // redirect to 'index' state after user adds a new bean:
        $state.go('index')
        
    })
    self.newBean = {}
  }


```

More info at [https://github.com/angular-ui/ui-router/wiki/Quick-Reference#state-1](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#state-1)

---

### CORS
If you'll need to allow different URL's or ports to connect to your API back end (or you see a CORS error in the console), you'll need to add a CORS header.

* `npm -i -S cors`
* then add the following lines to your server.js:

```js
var express = require('express')
// Require CORS here:
var cors = require('cors')
var app = express()
 
// Then mount cors as middleware like this:
app.use(cors())

...
```

This adds an `Access-Control-Allow-Origin` http header that has a wildcard value of `*` to every packet the server sends out. Which allows all domains/ports to connect.

For more, check out the [CORS npm documentation here](https://www.npmjs.com/package/cors).

---

### Adding `SHOW` and `UPDATE` crud actions to our controller:

```js
angular
    .module('beansApp')
    .controller('BeansController', BeansController)

BeansController.$inject = ['$http']
function BeansController($http) {
    var self = this
    self.all = []
    self.newBean = {}
    self.selectedBean = {}

    self.getBeans = getBeans
    self.getOneBean = getOneBean
    self.addBean = addBean
    self.updateBean = updateBean
    self.deleteBean = deleteBean

    getBeans()
    
    // Controller Actions

	// INDEX:
    function getBeans() {
        $http.get('/api/beans')
             .then(function(response) {
                 self.all = response.data
             })
    }

	// SHOW:
    function getOneBean(bean) {
        $http.get('/api/beans/' + bean._id)
             .then(function(response) {
                 self.selectedBean = response.data
             })
    }

	// NEW/CREATE:
    function addBean() {
        if (self.newBean.name && self.newBean.origin && self.newBean.quantity) {        
            $http.post('/api/beans', self.newBean)
                 .then(function(response) {
                    self.newBean = {}
                     getBeans()
                 })
        }
    }

	// EDIT/UPDATE:
    function updateBean(bean) {
        $http.patch('/api/beans/' + self.selectedBean._id, self.selectedBean)
             .then(function(response) {
                 getBeans()
             })
    }

	// DESTROY:
    function deleteBean(bean) {
        $http.delete('/api/beans/' + bean._id)
             .then(function(response) {
                 getBeans()
             })
    }
}
```