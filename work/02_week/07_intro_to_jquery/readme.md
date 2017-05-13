# Intro to jQuery 

## SWBAT
  - Explain what jQuery is, and when to use it
  - Describe how to include jQuery in your projects
  - Explain how to apply jQuery selectors to manipulate DOM elements
  - Add and remove DOM elements using jQuery
  - Add and remove classes with jQuery

## What is jQuery?
jQuery is a 3rd-party library that is intended to make front-end development tasks — particularly those involving DOM selection and manipulation — easier, faster, and more fun.

### But wait, what do we mean by 'library'?
**A `library`** is just a collection of reusable methods that serve a particular purpose.


### So, as a library, what does jQuery offer us?
  - jQuery helps us manipulate the DOM, allowing us to perform complex manipulations in less code with less hassle
  - jQuery's syntax was developed to mimic CSS selector syntax, making code easier to develop, read, and manage
  - The syntax is shorter, so there's less to remember! 😜
  - jQuery deals with many cross-browser compatibility issues for us

## Using jQuery

### Installation
**jQuery is a client side library, which means we need to include it in our HTML**. To do this, we have two options:

#### 1. Reference jQuery from a server on the internet
Directly from jQuery's website (http://code.jquery.com/)

`<script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>`

From a CDN (content delivery network) like [CDNJS](https://cdnjs.com/) or [Google Hosted Libraries](https://developers.google.com/speed/libraries/)

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>`

#### 2. Download a copy of jQuery to host on your own server

[CDNJS](http://www.cdnjs.com), [Google Hosted Libraries](https://developers.google.com/speed/libraries/), and the [jQuery site](http://www.jquery.com) will all allow you to download a copy of jQuery to include in your projects.

#### '.min.js' filename

If you look carefully at the filenames of the jQuery versions you download, or just look at the URL in the "src" attribute for each script tag above, you'll notice something at the end of each file name — namely, that they end in 'min.js'. This means the javascript code has been minified.

#### Minified

Minification is the process of making a javascript file smaller by, among other things, removing all line breaks and whitespace, reducing the length of variable and function names, and stripping out all comments. Minification can significantly reduce the size of a javascript file, and in turn, significantly decrease the time it takes our browsers to load the file into memory.

In jQuery's 3.1.1's case, the original (unminified) code is about 270 kilobytes, whereas the minified code is only 90 kilobytes. That makes the minified version **one-third** the size of the original - not bad!

Minified scripts can be difficult to read, so most servers that host jQuery and other libraries will also offer the original (non-minified) version of the code so developers can understand the code.

Minification is performed on a javascript library when it's ready for release and there are many options for doing this. If you'd like to minify your own scripts, try a google search to check out the various options. Or, you can try the [Closure Compiler from Google](https://developers.google.com/closure/compiler/) which runs locally on your computer like any other piece of software you might use as a developer.

Also, if you do happen to come across a library where you can't find a non-minified version to look at, software also exists to decompress a minified script. These are usually called unminifiers, pretty-printers, or beautifiers. They take a minified javascript file and attempt to decompress it, making it easier to read and understand.

**Even if you don't fully understand the code, it's a good exercise to visit code.jquery.com and take a look at minified and non-minified jQuery.**

#### 1.x vs. 2.x vs. 3.x jQuery

If you visit code.jquery.com, you'll see that there are three major versions in development.
  - The 1.x branch is the most cross-browser-compatible version of the jQuery core.
  - The 2.x branch, while offering some new features, is not compatible with older web browsers — most notably, it's not compatible with Internet Explorer versions 8 and below.
  - The 3.x branch is the newest, but it is also not compatible with Internet Explorer versions 8 and below.

---

### Intro to DOM manipulation

Before we get into jQuery, let's think about how we would perform the following tasks with vanilla javascript:

  - `select` a DIV and change its content  
  
	<!--document.getElementsByTagName('div')[0].innerHTML = 'Hi!'-->
  
  - `append` a new DIV with some content to a parent element
    
	<!--
	var div = document.createElement('div')
	div.innerHTML = 'Secondary Div!'
	document.getElementsByTagName('div')[0].appendChild(div)
	-->
  
  - `listen` for events on a collection of DIVs or other HTML elements
    + For example, a blog site might have a "like" button for each comment on a post.

	<!--
	var buttons = document.getElementsByTagName('button')
	for (var i = 0; i < buttons.length; i++) {
  		buttons[i].addEventListener('click', function(){
    		console.log('clicked!')
  		})
	}
	-->
	
That's a lot of code... jQuery will let us do those same tasks with much less code.

![gus](https://media4.giphy.com/media/74bjTAz6syrkc/200.gif)

#### First, let's just talk about selecting an element with jQuery

###### To select an element in the DOM, we use the global jQuery function:

This is the basic syntax for jQuery selections:
`$(' ')`

To select all elements with a specific tag name, you do:
`$('h2') // selects all h2 elements`

To select by ID, you use the same syntax as CSS selectors:
`$('#someID') // Would select the element with id of "someID"`

To select all elements of a particular class, use CSS syntax again:
`$('.someClass') // Selects all elements of the class "someClass"`

And you can use more complicated CSS selectors as well
`$('p.anotherClass') // Selects all <p> tags that also have the class "anotherClass" (<p class="anotherClass">)`


###### If you use variable assignment when doing a selection, a "jQuery" object is returned

Many developers prepend `$` to variable names when a variable is going to be a jQuery object to help them remember what that variable is for.
`var $jqObject = $('p') // Returns a jQuery object containing all <p> tags on your web page.`

However, we don't have to prepend `$` to our variables. It's just so we can remember what a variable is being used for. `var jqObject = $('p') // This is functionally identical to the version above that includes the '$' in front of jqObject.`

A jQuery object has access to jQuery methods.

#### Selecting a DOM element and changing its content

Using the standard DOM API:

`<div id="myDiv">Hello world!</div>`

```js
var divToManipulate = document.getElementById('myDiv')
divToManipulate.innerHTML = "Goodbye world!"

OR

document.getElementById('myDiv').innerHTML = "Goodbye world!"
```

Now the code above isn't too hard to deal with, but even so, in jQuery, this is a lot leaner.

```js
$('#myDiv').html("Goodbye world!")
```

See it in action [here](http://jsbin.com/rirumatozu/4/edit?html,js,output).

If we wanted to **save our selection as a jQuery object**, the code would look like this instead:

- First we select the element we want and save it as a jQuery object

`var $myDiv = $('#myDiv')`

- Then we use our jQuery object to perform our task

`$myDiv.html("Goodbye world!")`

![what](https://media1.giphy.com/media/xmqHmb0vRfGZq/200.gif)

There are three things about the example above that make jQuery easier to use:

  1. jQuery is using the same syntax as CSS to select elements - `.` for a class and `#` for an id.
  2. jQuery allows us to chain methods together to accomplish our goals (i.e., $().html(...) ), making code shorter and easier to understand.
  3. jQuery deals with any cross-browser compatibility issues, which may not seem like a big deal in this example, but which quickly become difficult to deal with as things get more complex.

#### Appending a DOM element to a parent element

Copy the [starter code](./starter_code) into your workspace and open it in atom.

Your HTML includes one div:

```html
<div id="container"></div>
```

Open up the HTML file in your browser so we can do some JavaScript and jQuery in the console.

If we want to add a new DIV that provides a nice greeting, our vanilla javascript would have to be something like this:

```js
var myDiv = document.getElementById('container')
var newP = document.createElement('p')
newP.innerHTML = 'Hello complicated, multi-step world of adding an element to the DOM!'
myDiv.appendChild(newP)
```

And in jQuery, it looks like this:

```js
$('#container').append('<p>Hello simple insertion using jQuery chaining</p>')
```

In the jQuery code example above, we first select the DIV with id="container", then we append a new paragraph element with text. In effect, the new HTML looks like this after the jQuery is run:

```html
<div id="container">
  <p>
    Hello simple insertion using jQuery chaining
  </p>
</div>
```
![easy](https://media4.giphy.com/media/zcCGBRQshGdt6/200.gif)

Go ahead and add that jQuery line to your JS file so we have some text to work with for the next section.

#### Adding and Removing Classes Using jQuery

You can do more than select elements and modify content. You can also add or remove classes, which can affect style.

Let's add this to our CSS file:

```css
.red {
  color: red;
}
```

The code above will change the color of all text inside any element with class="red" to red.

So, let's add class="red" to something!

```js
$('div').addClass('red')
```
We can also remove classes. Add class "bold" to your container div, then set the style like so:

```css
.bold {
  font-weight: bold;
}
```

Refresh your page to make sure it works. Then add this to your JavaScript:

```js
$('div').removeClass('bold')
```

We can also use `toggleClass`, which will either add or remove a class to an element depending on whether the element already has that class.

```js
$('div').toggleClass('red')
```

The three methods above can deal with multiple classes, just separate them by a space.

```js
$('div').toggleClass('red bold')
```

## Adding and Removing Elements Using jQuery

Sometimes in a dynamic web application, user-input is meant to trigger the addition or removal of content or functionality. Using jQuery, we can easily create new DOM elements and insert them into the DOM, or remove existing elements (and any content they contain) from the DOM.

So, let's update our HTML to this:

```html
<body>
  <div id="outerContainer">
    <div class="innerItem innerItemHeader">Enjoy some hipster ipsum:</div>
    <div class="innerItem">
      Aesthetic migas paleo McSweeney's, pork belly Kickstarter Echo Park sriracha keytar disrupt viral drinking vinegar fanny pack typewriter.
    </div>
  </div>
</body>
```

Let's say we want to add some more hipster ipsum to the page. Something like:

```
<div class="innerItem">
	Farm-to-table Godard roof party bespoke, fashion axe mustache vinyl.
</div>
```

To add this DIV, and our hipster ipsum content using jQuery, we'd do the following:

Define a new DIV and assign jQuery object to $newDiv

`$newDiv = $('<div>')`

Add hipster ipsum content

`$newDiv.html('Farm-to-table Godard roof party bespoke, fashion axe mustache vinyl.')`

Set its class to innerItem
`$newDiv.addClass('innerItem')`

Append our new element  
`$('#outerContainer').append($newDiv)`

##Conclusion

Using the HTML page from the previous exercise, let's write some jQuery for it. Let's use jQuery to:

- add a p tag within the div with id "myDiv"
- add class "small-text" to the new p tag
- add class "bold" to the new p tag
- remove class "bold" from the div with id "container"
- add some text to the p tag, "I'm using jQuery - hooray!"
