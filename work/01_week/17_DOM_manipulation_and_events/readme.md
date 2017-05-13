# DOM Manipulation & Events

##SWBAT
* Understand the role of events
* Recognize and respond to common types of events
* Describe how to pass an anonymous function to an event listener
* Describe how to pass a named function to an event listener

## What are events?

Events are things that happen to a page. For example, when a user clicks on a button, that is a click event. Some common events are:

* load
* click
* mouseover
* mouseout
* hover
* keydown
* submit

Those are just some events - there are many more! You can read more about events [here](https://developer.mozilla.org/en-US/docs/Web/Events).

## The Basics

In order to respond to an event, you need an event listener. Open up any web page in your browser, and type this into the console:

```js
document.getElementsByTagName('body')[0].addEventListener('click', function(){
  console.log('Click happens!')
}
```

Now click on the page. Check the console!

Let's break that down.

## Code Along - Callbacks & Event Listeners

Copy the `starter_code` into your workspace! We're going to add HTML and then write JS to change our HTML based on events.

### Tasks

- Add a button to the page that says "Greeting"
  - When the button is clicked, have a pop-up say, "Hello!"
- Add a photo of a kitten
  - When the kitten photo is clicked, change it to a photo of a puppy
  - When the puppy photo is clicked, change it back to the kitten photo
- Add three buttons with animal names on them (ex: cat, dog, unicorn)
  - When one of the buttons is pushed, change the background image of the page
- Add a list of some of your favorite things
  - When you mouse over a list item, change its font color
  - When the mouse leaves the list item, change the font color back
- Make a "picture frame" on the page
  - When a list item is clicked, add an image of that item inside the picture frame
- Add an input field, a submit button, and an h1 that says "Hi! What's your name?"
  - When the submit button is clicked, whatever is in the input field should be saved to a variable and the h1 should change to "Hi, " + the text from the input field
  - **Bonus**: clear the input field after submission
- Add a p tag with an anchor tag inside it
  - Make the p tag change its text color when clicked
  - Make the anchor tag change its text color when clicked
  - Make it so the p tag text *doesn't* change color when the anchor tag is clicked

#### Super Bonus!

Not for the faint of heart!

So far we've been passing anonymous functions to events. In order to complete this next task, we will have to pass our event listener a named function instead.

- Add another button that says "Click me only once!"
  - When the button is clicked for the first time, have a pop-up say, "That's it!"
  - When the button is clicked again, nothing happens
 
## Conclusion

Next week we will introduce a library that will make DOM manipulation and events *much* easier and faster to write. But for now, stick with vanilla JavaScript. You have to learn to walk before you can run!