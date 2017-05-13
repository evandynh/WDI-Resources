#FUNctions! and Javascript scope!

[![Conjunction Junction](./assets/conjunction_junction.png)](https://www.youtube.com/watch?v=5kTvLVRXcJs "Conjunction Junction Schoolhouse Rock")

##Students will be able to...
* Confidently write functions, then invoke them
* Explain what scope is
* Create a new local scope 
* Explain *hoisting* in terms of load order


##Let's make a function!
```js
function helloWorld(){
	alert('Hello, world')
}
```

there are 3 important parts to know:
1) the function keyword
2) the function name
3) the code block


Then we call (or "invoke") the function. The () are the important bits that tell the JavaScript engine to run the function. 


###Your task:
Write a simple function, exactly like the above, that alerts your favorite food, then call it.

##Let's make a better function!

Some functions need to be provided with information in order to achieve a particular task. If you wanted to write a function that calculates the area of a square, *what would you need to provide that function?*

Let's look at an example of providing information to a function:

```js
function sayHello(name){
	console.log('Hello ' + name)
}
```

The string and variable inside `console.log()` can also be combined with these alternate syntaxes: 

* `console.log('Hello', name)`
	* the comma automatically inserts a space, so you don't need to include it inside the string  
	* this syntax *only* works inside `console.log()`, so you cannot use it in `alert()` or `return` statements
* ``console.log(`Hello ${name}`)``
	* this is *interpolation*, **not** concatenation, which is a new feature in ES6
	* note that those are backticks (on the same key as the ~), not single quotation marks

###Your task
1) Write a function that calculates the area of a square. Think - what info will it need? What will it do with this info?

2) Write a function with two parameters, *name* and *age*. When called, you want the function to alert a message that introduces you and says how old you are (e.g. "I'm Kate, I am 30 years old").

##Another way to write a function:
```js
var sayHello = function(){
	alert("hello")
}
```

This is *function expression* syntax. The other syntax we've used in this lesson is called *function declaration*.

The main difference between function expression and function declaration is hoisting. We'll talk about that more in a few minutes.

## What is 'scope'?!
Scope is simply the set of variables, objects, and functions that you have access to at any point in your code. 

## So what is 'global' scope?
If a variable is in the global scope, it means that it can be accessed globally - i.e. all other scripts and functions on the page can access it. 

* TASK ONE<br>Delete your work in repl.it so far. In pairs, define a variable called favoriteColor, and set it equal to green. Then write a function called showColor, that simply console logs it. Call the function and see if it works. 

	This variable called favoriteColor that we just defined has GLOBAL scope. It can be accessed from anywhere on the page. We just console logged it from inside the function, but we can console log it from ANYWHERE. Try console logging it from outside the function. 

* TASK TWO<br>Inside your showColor function, define a new variable called secondFavoriteColor and set it to red. Try console logging it from within the function, and then try console logging it from outside the function. What happens?

	What happens if we leave the `var` keyword out?

	The browser assumes that it is a global variable. For that reason, whenever we define a new variable, we always put `var` first. We don't want a lot of global variables if we don't need them, and we want to be precise about where we define our variables.

## What is 'local' scope?
Local scope is anything that is smaller than the global scope.

We create a new local scope by making a function. 

What will be logged in each of these cases?

```javascript
var a = 10

function showNumber() {
    console.log(a)
}

showNumber()

// 10? not defined? Or something else?
```


```javascript
function showNumber() {
    var b = 5
    console.log(b)
}

showNumber()

// 5? or not defined
```

```javascript
function showNumber() {
    var c = 5  
}

showNumber()
console.log(c)
// 5? or not defined
```



```javascript
var d = 15

function showNumber() {
    var d = 20    
    console.log(d)
}

showNumber()
// 15? 20? or not defined
```

```javascript
var e = 3

function showNumber() {
    e = 6   
    console.log(e)
}

showNumber()
// 3? 6? or not defined
```



```js
function showNumber() {
    var f = 10
    if(f > 5) {
        f = 7
    }
    console.log(f)
}

showNumber()
```


```javascript
var g = 5

function first() {
    g = 6
}

function second() {
    console.log(g)
}

first()
second()

// 5? 6? or something else?
```

```javascript
function first() {
    h = 3
}

function second() {
    console.log(h)
}

first()
second()

// 3? or not defined?
```


```javascript
var i = 5

function showNumber() {
    var i = 7
    console.log(i)
}

showNumber()

// 5? 7? or not defined?
```

```javascript
var num = 1

function first(){
	console.log(num)
	num = 2

	function second(){
		console.log(num)
	}
	second()
}

first()

// 1,2? 2,1? or something else?
```

```javascript
var cat = "tom"

function showAnimals(){
	var mouse = "jerry"
	console.log(cat)
}

showAnimals()
console.log(mouse)

// tom, jerry? jerry, tom? Or something else?
```


```javascript
var x = 6

function first() {
    var x = 7
    function second() {
        var x = 8
        console.log(x) 
    }
    second()
    console.log(x)  
}

first()
​console.log(x)  

//8,7,6? 6,7,8? 7,8,6? 7,6,8? or something else?
```


## Hoisting

Have you ever had problems getting your code to do what you want because your javascript loaded stuff in the wrong order?

```js
console.log(bestAnimal)
var bestAnimal = "dog"
```
This happens ALL THE TIME!

If we understand hoisting, we don't need to worry as much about load order.

### variable hoisting

```js 
var city = "Los Angeles"
console.log(city)
```

```js
var city = "Los Angeles"

function showCity(){
	console.log(city)
}

showCity()
```

```js
var city = "Los Angeles"

function showCity(){
	console.log(city)
	var city = "New York"
}

showCity()

// HOLY MACKEREL! WHY IS THIS SILLINESS HAPPENING?!
```
Okay, we need to talk about EXACTLY what is happening when javascript is running. 

Before any javascript is executed, the compiler searches through your code, finds any variables, and effectively 'hoists' them to the top of the current scope. However, ONLY the declaration is hoisted, not the actual assignment!

After that, it searches through and finds all the function declarations and hoists them to the top too. 

<!--When code is hoisted, it is treated as if it is at the top.-->

This means you can call a function above where it is written as a *function declaration*.

<!--All variable declarations are hoisted as well, but not assignments. More information [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var).-->

Only AFTER it has done this, does it actually go through and execute your code. 

Every time a function is executed, it goes through the same process on a smaller scale - inside the function that is currently running, the compiler searches through your code, finds any variables, and 'hoists' them to the top of that function. It then searches through and finds all the function declarations and hoists them to the top of the function too. 

This is why I rarely use function expressions:

```js
// this function can only be called below where it is defined
double(5)

var double = function(number){
	return number*2
}

```

and instead I use function declarations:

```js
//this function can be called above or below where it is defined
double(5)

function double(number){
	return number*2
}
```

## Your tasks:
* Why does [this code](http://repl.it/mVA/4) not work? 
Please fix it.
* Change showCar to a function declaration so that it will work.
* Explain why [this code](http://repl.it/mVA/1) outputs the way it does 
* How is [this code](http://repl.it/mVA/2) different, and why does it not work? 
* Why does [this](http://repl.it/mVA/5) not work? 
* [This one](http://repl.it/mVA/6) seems broken too, how can we fix it? 
* Arg! I keep getting errors! Why does line 8 not work [here](http://repl.it/mVA/7)? 
* Explain why the animal variable sometimes refers to the gorilla, and sometimes refers to the puppy [here](http://repl.it/mVA/8)
	* remove a single word from the previous code so that the puppy waves, not the gorilla. 


##Conclusion

Let's review this code together:

```js
var dog = 'Rufus';
function start(){
 var dog = 'Spot';
 var cat = 'Fluffy';
 fish = 'Goldie'
}
start();

alert(dog); 
alert(fish);
alert(cat);
```
What are the values of each of these alerts?