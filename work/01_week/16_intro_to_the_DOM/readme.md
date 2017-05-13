#Intro to the DOM!

##Students will be able to...
* Explain what the DOM is
* Use JavaScript to select parts of the DOM
* Use JavaScript to change parts of the DOM

##What is the DOM?

From [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction):

>The Document Object Model (DOM) is a programming interface for HTML and XML documents. It provides a structured representation of the document and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content.

##Starter
Let's go crazy! Mess up the New York Times! Turn Google into Bing!

As a browser loads a page, it creates a representation of that page in which each element is an object. This representation is called the DOM tree, and it is stored in the browser's memory. 

![DOM Tree](http://www.webstepbook.com/supplements/slides/images/dom_tree.gif)

##Let's use JS to 'grab' part of the DOM
Do a `git pull` on the class repo and copy the starter code into your workspace.

Open `index.html` in Chrome and then open the dev tools. Type these commands into the console and discuss the *data type* of the results with a partner.

* `document.getElementsByTagName('h1')`
* `document.getElementsByClassName('info')`
* `document.getElementById('content')`

##Now let's use JS to CHANGE some of the attributes of these elements.
* if we want to change the text of the element, we can grab the element and change its innerHTML property.
* if we want to change the CSS of an element, we can grab the element and change its style.color or its style.width

##BONUS ROUND! Let's use JS to add an event listener to an object...

###There are three ways to do it
* In HTML: ```<element onclick="myFunction()">``` <img src="http://upload.wikimedia.org/wikipedia/en/2/2f/Thumbs-down-icon.png" align="top right" height="25px" width="25px"</img>

* In JavaScript: ```object.onclick=function(){myScript};``` <img src="http://www.clker.com/cliparts/2/7/d/5/1247117411176075605Symbol_thumbs_up.svg" align="top right" height="25px" width="25px"</img>

* In JavaScript using the `addEventListener()` method: ```object.addEventListener('click', myFunction);``` <img src="http://www.clker.com/cliparts/2/7/d/5/1247117411176075605Symbol_thumbs_up.svg" align="top right" height="25px" width="25px"</img>

When the happy/sad face is clicked, make a pop up window appear saying how happy you are now that you know how to manipulate the DOM. 

### Conclusion

* What *data type* results from each of these methods?
  * `document.getElementsByTagName()`
  * `document.getElementsByClassName()`
  * `document.getElementById()`
* How would you select the second `h1` on a page?