# Javascript Object Constructors

## Learning Objectives

*After this lesson, students will be able to:*

+ Use constructor functions to create objects
+ Explain how `new` relates to constructor functions
+ Describe the need for constructor functions in OOP
+ Explain how `this` is used in constructor functions
+ Explain the difference between the returned values of regular functions and constructor functions

## Roadmap

* Intro to Constructors
* Object Constructors
	* `new`
	* `this`
	* mini-lab
* Object Inheritance
	* Prototype
	* ES6 `Class` keyword
* Conclusion

## Intro

Constructor functions are useful in OOP (Object Oriented Programming) because they allow us to create multiple objects with specific properties and methods which we define. Just like all arrays can access a set of methods defined in JavaScript, objects built using constructor functions we write can all access the methods which we define for that constructor.

We've already talked about how to make objects. Let's review a couple of ways to make them before we get to constructors.

Creating objects using object literals:

```js
var freddie = {
  name: 'Freddie',
  hairColor: 'black'
}

var mercury = {
  name: 'Mercury',
  hairColor: 'orange'
}

var delilah = {
  name: 'Delilah',
  hairColor: 'grey'
}
```

Creating objects using functions that return an object:

```js
function cat(name, hairColor) {
  return {
    name: name,
    hairColor: hairColor
  }
}

var freddie = cat('Freddie','black')

/*
  {
    name: 'Freddie',
    hairColor: 'black'
  }
*/

var mercury = cat('Mercury','orange')

/*
  {
    name: 'Mercury',
    hairColor: 'orange'
  }
*/

var delilah = cat('Delilah','grey')

/*
  {
    name: 'Delilah',
    hairColor: 'grey'
  }
*/
```

## Object Constructors

Sometimes you will want several objects to represent similar things. Object constructors can use a function as a template for creating objects.

### Think - Pair - Share
Why might OOP be helpful in your first project?

### The `new` Keyword

The `new` keyword and the object constructor create a blank object. You can then add properties and methods to the object.

Create an object using Object literal or Object constructor:

```js
var obj = {}

// or

var obj = new Object()

// both are the same!
```

Just like with the JavaScript constructor `Object`, we can use the `new` keyword to create instances of our own constructor function.

```js
function Cat() {
	
}

var delilah = new Cat()
```

### The `this` Keyword

The `this` keyword is used instead of the object name to indicate that the property or method belongs to the object that `this` function creates.

```js
function cat(name, hairColor) {
  var model = {}

  model.name = name
  model.hairColor = hairColor

  return model
}

var mercury = cat('Mercury','orange')
```

Use the `this` keyword in a *Constructor* function:

```js
function Cat(name, hairColor) {
  this.name = name
  this.hairColor = hairColor
}

var freddie = new Cat('Freddie','black')
```

#### Independent Work

![car](https://media1.giphy.com/media/l2R0e9y6A304JkFOg/200.gif)

* Create a constructor function for a car. It should have the following properties: make, model, and year.

<!--
```js
function Car(make, model, year){
  this.make = make
  this.model = model
  this.year = year
}
```
-->

* Use the `Car` constructor function to create two cars.

<!--
```js
var elantra = new Car('Hyundai', 'Elantra', 2017)
var a4 = new Car('Audi', 'A4', 2002)
```
-->

### Object Inheritance

Inheritance is when an object is based on another object, using the same implementation to maintain the same behavior. Prototypes in Javascript can be used to add methods to all objects created by a specific constructor function, or to specify another constructor function from which this one inherits methods.

#### Prototype

What is a prototype?

<!--A first, typical or preliminary model of something, especially a machine, from which other forms are developed or copied.-->

You have already been using inheritance! `String.toUpperCase()`, `Array.splice()`, etc. Those methods are inherited from the String and Array constructors built into the core of JavaScript, and they are available on all instances of strings and arrays which you create.

You can use `prototype` to add methods onto all of the objects that are created using a constructor function.

```js
var Machine = function(name, purpose) {
  this.name = name
  this.purpose = purpose
}

Machine.prototype.purchase = function() {
  return 'You purchased a(n) ' + this.name + '.'
}

var computer = new Machine('MacBook Pro', 'code and internet and stuff')
var tablet = new Machine('iPad', 'internet and games and stuff')

computer.purchase() => 'You purchased a(n) MacBook Pro.'
tablet.purchase() => 'You purchased a(n) iPad.'
```

You can also use `prototype` to make a new constructor which inherits methods from another constructor.

```js
Phone.prototype = new Machine()
Phone.prototype.constructor = Phone
function Phone(brand, name) {
  this.brand = brand
  this.name = name
  this.purpose = 'to make calls, maybe?'
}

var iPhone = new Phone('Apple', 'iPhone')
var android = new Phone('Samsung', 'Galaxy S 7')

iPhone.purchase() => 'You purchased a(n) iPhone.'
android.purchase() => 'You purchased a(n) Galaxy S 7.'
```

Notice that `purchase` was not specifically written for `Phone`, but it is available to `Phone` because `Phone` inherits it from `Machine`.

There's an easier way to write this with ES6. Check out the [`Class` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Using ES6 we can write something like this:

```js
class Phone extends Machine
``` 

instead of the `prototype` and `prototype.constructor` lines.

#### Independent Work

![Volkswagen](https://media2.giphy.com/media/3o6ozgHi0Fv82zA12M/200w.gif)

Using your `Car` constructor, do the following:

* Add a method to its prototype called `go`.
  + This function should accept a number.
  + If the number is at least 90, return 'Pedal to the metal!'
  + If the number is less than 90, return 'Speed up, granny!!'

<!--
```js
Car.prototype.go = function(speed) {
  if(speed >= 90) {
    return "Pedal to the metal!"
  } else {
    return "Speed up, granny!"
  }
}
```
-->

* Add another method to its prototype called `getDetails`.
  + This function should return the make, model and year of the car

<!--
```js
Car.prototype.getDetails = function(){
  return 'This is a ' + this.year + ' ' + this.make + ' ' + this.model + '.'
}
```
-->

* Bonus: write a constructor for `Volkswagen` (or any make you choose) which inherits from `Car`. Make one Volkswagen using the constructor function. Check to make sure `go` and `getDetails` work on new instances of `Volkswagen`.

<!--
```js
Volkswagen.prototype = new Car()
Volkswagen.prototype.constructor = Volkswagen
function Volkswagen(model, year){
  this.make = 'Volkswagen'
  this.model = model
  this.year = year
}

OR

function Volkswagen(model, year){
  Car.call(this, 'Volkswagen', model, year)
}

var jetta = new Volkswagen('Jetta', 2007)
```
-->

## Conclusion

+ Explain the `new` key word.
+ How is `this` used in constructor functions?
+ Why are constructor functions useful in OOP?
+ What is the `prototype` property?
