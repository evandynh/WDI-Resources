# Intermediate jQuery


## SWBAT:
- Add event listeners for standard events that happen within the runtime environment
- Understand event bubbling (and how to stop it)
- Apply jQuery to manipulate, add, and remove DOM elements
- Capture data from specific events and iterate or manipulate the data

## Setup

Navigate to your workspace. Create a new directory with the following file structure:

```bash
├── css
|   └── style.css
├── index.html
└── js
    └── app.js

2 directories, 3 files
```

Create the HTML boilerplate in your HTML file and source in your CSS and JS files. Also source in [jQuery](http://code.jquery.com/)!

## Event listeners

In vanilla JavaScript, event listeners look like this:

```javascript
document.getElementById('someId').addEventListener('click', function () {
	// Do Something
})
```

Now they look like this:

```javascript
$('#someId').on('click', function () {
	// Do Something
})
```

Let's add a button to our HTML that alerts "You clicked me!" when it's clicked.

```html
<button id="myBtn">Click me!</button>
```

```javascript
$('#myBtn').on('click', function () {
	alert('You clicked me!')
})
```


## Event Bubbling (Propagation)

Event bubbling is a concept in JavaScript that says that when an event happens on an element, it will happen to the parent elements, too. Let's add this to our HTML:

```html
<div id="container">
  <button id="myBtn">Click me!</button>
</div>
```

And add this to our JavaScript:

```javascript
$('#container').on('click', function () {
	alert('You clicked the container div!')
})
$('#myBtn').on('click', function () {
	alert('You clicked the button!')
})
```

Now, click the button!

We only clicked once, but two event listeners were activated. Notice the order in which the alerts occured.

##Stop Event Bubbling!

What if you don't want events to bubble? If you click on the button, do you want the div to react, too? If not, you can add another line to your button event listener to prevent bubbling.

`event.stopPropagation()`

> Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.

If you want a deeper understanding of event.stopPropagation(), check out [the docs](https://api.jquery.com/event.stoppropagation/).

Let's try it! Right now, if we click on our button, we get two alerts, one from the button's event listener and one from its parent div's event listener. Change your button event listener to this:

```javascript
$('#myBtn').on('click', function () {
	event.stopPropagation()
	alert('You clicked the button!')
})
```

![wow](https://media4.giphy.com/media/l46Cx55rk8zI7HlKM/200.gif)

## Manipulating the DOM

jQuery DOM Manipulation:

Grabbing the innerHTML of an element:  
`var elemInnerHTML = $('#someID').html()`  

Adding to the DOM:  
`$('#someID').html("<div class='newClass'></div>")`  

*Notice the difference between getting the html `.html()` and setting the html `.html('changing it up!')`*

Removing an element:  
`$('#someID').remove()`  

#### Pair Activity
Go try it! Build a list of foods and a list of soft drinks. Your HTML should only have:

```html
<section class="foodsAndDrinks">
	<h1>Drinks</h1>
	<ul id="drinks"></ul>
	<h1>Foods</h1>
	<ul id="foods"></ul>
</section>
```

Use jQuery to add `<li>`s to each of these lists by appending them to each `<ul>`.

##Capture Data
Let's add an input field to our page and use jQuery to add whatever is entered in that input field as a new list item in the foods list. This might look scary, but let's break it down:

```html
<h1>My Food</h1>
<ul id="foods"></ul>

<input id="foodInput"></input>
<button id="addFood">Add Food</button>
```

```javascript
$('#addFood').on('click', function(){
	var newFood = $('#foodInput').val()
	$('<li />', {html: newFood}).appendTo('ul#foods')
})
```

OR

```javascript
$('#addFood').click(function(){
  var newFood = $('#foodInput').val()
  $('#foods').append('<li>' + newFood + '</li>')
})
```

##Independent Practice

It's play time! Google each of these events and practice adding them to your code.

- keydown
- keypress
- keyup
- mouseover

Like we talked about yesterday, you can use `.on('click', function(){})` or `.click(function(){})`. Do these other events all have two options, as well?

##Conclusion

- What is event bubbling and how do we stop it?
- How can I capture data from an input field?
- What is the difference between `$('#foods').html()` and `$('#foods').html('')`?
- How would jQuery be helpful in building a game?
