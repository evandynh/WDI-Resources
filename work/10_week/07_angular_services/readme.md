<!-----
title: Angular Services
type: Lesson
duration: "1:15"
creator:
    name: Kate Wood
    city: LA
competencies: Front-end Frameworks
----->

# Angular Services

### Objectives

- Refactor an Angular app from `controller as` method to `$scope` method
- Describe what services are in Angular
- Explain dependency injection
- Describe `$log`

### Preparation

- Know how to build a simple Angular app using the `controller as` method
- Download the [starter code](./starter_code)

## Intro - What is `$scope`?

`$scope` is the default *method* used in Angular. The newer method is `controller as`. Although we will mostly be using the `controller as` method during lessons, it is important for you to understand both methods.

**WHY?**

When you google errors or examples in Angular, you will usually see answers using the `$scope` method. It's important for you to be able to translate code from the `$scope` method to the `controller as` method, and vice versa.

`$scope` is also a service! We'll get into those more later in this lesson.

## Build a Boats App Using Controller As Syntax

![](http://i.imgur.com/VyFiWyh.gif)

#### Setup

Download the [starter code](starter-code) and copy it into your workspace so you can make some changes.

###### app.js

This file is pretty simple. We need to add just one line:

```javascript
angular.module('boatsApp', [])
```

###### boatsController.js

We need to add a lot of stuff here! The HTML file is already set up, so make sure you write exactly what I write in your boatsController!

```javascript
angular.module('boatsApp')
	.controller('BoatsController', BoatsController)

function BoatsController() {
	var self = this
	self.add = addBoat
	self.newBoat = {name: "", type: "", image: ""}

	self.all = [
		{name: "Banana Sit", type: "Banana Boat", sold: true, image: "http://static.wixstatic.com/media/740099_08645fc42d3a48eeb8ee307312288314.png_512"},
		{name: "Lost Island Express", type: "Ferry", sold: false, image: "https://pixabay.com/static/uploads/photo/2013/07/13/10/34/ferry-157516_640.png"},
		{name: "Yacht's Go!", type: "Yacht", sold: true, image: "http://kitesafari.pro/public/yacht/thumbs/version_2/7bb5b6582c9b2b4c67d46c5dd5316d3f.png"},
		{name: "I Hardly Know 'Er", type: "Cutter", sold: false, image: "http://www.lochin.com/images/lochin_l367_pilot_boat.png"},
		{name: "Uber dell'acqua", type: "Water Taxi", sold: true, image: "http://products.damen.com/~/media/Products/Images/Clusters%20groups/Ferries/Passenger%20Ferry/Water%20Taxi%201606/3d/New/Damen_Water_Taxi_1606.ashx?mw=362"}
	]

	function addBoat() {
		self.all.push({name: self.newBoat.name, type: self.newBoat.type, sold:false, image: self.newBoat.image})
		self.newBoat = {name: "", type: "", image: ""}
	}
}
```

###### index.html

This HTML file has a lot of other stuff in it, so let's just focus on lines 2 and 33-51.

On line 2, we're telling the app to use our module called `boatsApp`, defined in `app.js`.

```javascript
<html ng-app="boatsApp">
```

In lines 33-51, we're using several angular directives.

```javascript
	<div class="container main" ng-controller="BoatsController as boatsCtrl">
		<h3>You have {{boatsCtrl.all.length}} boats left to sell</h3>
		
		<form class="form-inline" id='add-boat' ng-submit="boatsCtrl.add()">
			<label class="sr-only" for="boatsCtrl.newBoat.name">Name</label>
			<input class="form-control" type="text" placeholder="The boat is named ..." ng-model="boatsCtrl.newBoat.name" />
			<label class="sr-only" for="boatsCtrl.newBoat.type">Type</label>
			<input class="form-control" type="text" placeholder="It is a ..." ng-model="boatsCtrl.newBoat.type" />
			<label class="sr-only" for="boatsCtrl.newBoat.image">Image</label>
			<input class="form-control" type="text" placeholder="Here's an image (url)..." ng-model="boatsCtrl.newBoat.image" />
			<label class="sr-only" for="boatsCtrl.newBoat">Submit</label>
			<input class="btn btn-default" type="submit"/>
		</form>
		
		<div ng-repeat="boat in boatsCtrl.all">
			<input type="checkbox" ng-model="boat.sold" /><span ng-class="{strike:boat.sold}"> {{boat.type}}: {{boat.name}} </span>
			<img src="{{boat.image}}" class="boat-image"/>
		</div>
	</div>
```

What is each of these directives doing?

- ng-app
- ng-controller
- ng-submit
- ng-model
- ng-repeat
- ng-class

We can use all of these same directives with the `$scope` method, too! So...

*Are you ready to refactor?!*

## But first...

Since we're writing client-side javascript, we should have our dev tools open.

![](https://media4.giphy.com/media/10osILvZ4ez7ws/200.gif)

Hey! File not found? But... the images are all there...

What's that error? 🤔

We've seen this before. There's a very simple fix. What is it?!

## Refactor Boats App to Use `$scope` method - Codealong

#### Inject `$scope` into the controller

Just like other functions, our controller can take arguments. In the case of a controller, those arguments are called injections. Inject `$scope` into the BoatsController like this:

```javascript
function BoatsController($scope) {
```

That's it! `$scope` is injected! Now, let's convert everything inside the controller to this method.

We can get rid of `var self` altogether. Everywhere that had `self.` should change to `$scope.` Here's what the updated code looks like:

```javascript
function BoatsController($scope) {
	$scope.add = addBoat
	$scope.newBoat = {name: "", type: "", image: ""}

	$scope.all = [
		{name: "Banana Sit", type: "Banana Boat", sold: true, image: "http://static.wixstatic.com/media/740099_08645fc42d3a48eeb8ee307312288314.png_512"},
		{name: "Lost Island Express", type: "Ferry", sold: false, image: "https://pixabay.com/static/uploads/photo/2013/07/13/10/34/ferry-157516_640.png"},
		{name: "Yacht's Go!", type: "Yacht", sold: true, image: "http://kitesafari.pro/public/yacht/thumbs/version_2/7bb5b6582c9b2b4c67d46c5dd5316d3f.png"},
		{name: "I Hardly Know 'Er", type: "Cutter", sold: false, image: "http://www.lochin.com/images/lochin_l367_pilot_boat.png"},
		{name: "Uber dell'acqua", type: "Water Taxi", sold: true, image: "http://products.damen.com/~/media/Products/Images/Clusters%20groups/Ferries/Passenger%20Ferry/Water%20Taxi%201606/3d/New/Damen_Water_Taxi_1606.ashx?mw=362"}
	]

	function addBoat() {
		$scope.all.push({name: $scope.newBoat.name, type: $scope.newBoat.type, sold:false, image: $scope.newBoat.image})
		$scope.newBoat = {name: "", type: "", image: ""}
	}
}
```

That doesn't look so different!

#### Change the syntax in the HTML

Instead of `ng-controller="BoatsController as boatsCtrl"`, we just need `ng-controller="BoatsController"`.

Everywhere we're using `boatsCtrl.` we can just delete it! `{{boatsCtrl.all.length}}` becomes `{{all.length}}`, etc.

Let's walk through the HTML and make all the changes together.

## What is an Angular Service?

From the [Angular Services documentation](https://docs.angularjs.org/guide/services):

> Angular services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app.

> Angular services are:

> - Lazily instantiated – Angular only instantiates a service when an application component depends on it.
> - Singletons – Each component dependent on a service gets a reference to the single instance generated by the service factory.

> Angular offers several useful services (like `$http`), but for most applications you'll also want to create your own."

> *Note: Like other core Angular identifiers, built-in services always start with* `$` *(e.g.* `$http`*).*

#### Core Services vs. Create Your Own

Angular includes many [core services](https://d2eip9sf3oo6c2.cloudfront.net/pdf/egghead-io-angular-core-services-cheat-sheet.pdf). The most common is `$scope`. We will also look at `$log`, `$http`, and `$resource` this week.

To use a core service, you just add it as an argument in the controller function, like we did with `$scope` in the boats app.

```javascript
function BoatsController($scope) {
```

When you want to use a service which you create, called a factory, you must also inject it using `$inject`. For example, if we create a service called `boatsFactory`, we can inject it into our controller like this:

```javascript
angular.module('boatsApp')
	.controller('BoatsController', BoatsController)

// injects boatsFactory
        BoatsController.$inject = ['boatsFactory'];

function BoatsController(boatsFactory) {
```

That is called dependency injection.

*Remember: built-in services begin with `$`, but our factories do not.*

We won't make our own factory right now - we will do that tomorrow. For the rest of this morning we will focus on built-in services.

## Add `$log` to the Boats App - Codealong

What is `$log`? From the [documentation](https://docs.angularjs.org/api/ng/service/$log):

>Simple service for logging. Default implementation safely writes the message into the browser's console (if present).

Let's start by adding it as a dependency in the BoatsController function.

```javascript
function BoatsController($log, $scope) {
```

Now, let's use it! After `$scope.all`, add this line:

```javascript
$log.log($scope.all)
```

Now, let's check it out in the browser! When you open the console, you'll see what `$log` did.

## Why would we use `$log` instead of `console.log`?

You tell me! Use your super awesome Google skills to figure out if there's any reason whatsoever to use `$log` in your Angular applications.

![](https://media0.giphy.com/media/JUh0yTz4h931K/200.gif)


## Conclusion

- What is an Angular Service (definition)?
- What is one Angular *core* or *built-in* service besides `$scope`?
- How do we tell our controller which services to use?
