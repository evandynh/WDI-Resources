#More jQuery

###SWBAT

- Understand naming convention for jQuery objects stored as variables
- Understand how to use the jQuery's `.ready()` method
- Manipulate the DOM confidently using jQuery


##jQuery Objects as Variables

We prepend `$` to variable names when a variable is going to be a jQuery object to help us remember that jQuery methods are available to that variable.  
`var $jqObject = $('p');`  
This variable returns a jQuery object containing all `p` tags on your web page.

However, we don't have to prepend `$` to our variables. It's just so we can remember what a variable is being used for.  
`var jqObject = $('p');`  
This is functionally identical to the version above that includes the `$` in front of jqObject.

##.ready()

So far, we've been linking our javascript files in the bottom of the body so that they will wait for the HTML to load before running any javascript. Another way we can ensure that our javascript waits is by using jQuery's `.ready()` method.

```javascript
$( document ).ready(function(){
  //all of your other stuff
})
```

Find out more by checking out the [docs](https://learn.jquery.com/using-jquery-core/document-ready/).

## Deployment with GitHub Pages

Let's check out the [cheatsheet](../../../cheatsheets/github_pages.md) on GitHub Pages deployment and deploy our jQuery practice projects!

##Review

Let's review the jQuery we've learned so far. Grab a marker and write on the walls and desks!

* jQuery selectors
  * How do you select all of the divs?
  * How do you select all elements with class `myClass`?
  * How do you select the element with id `someId`?
* DOM Manipulation - what do these methods do?
  * `.append()`
  * `.html()`
  * `.text()`
  * `.addClass()`
  * `.removeClass()`
  * `.toggleClass()`
* What is event bubbling?
  * How do you stop it?