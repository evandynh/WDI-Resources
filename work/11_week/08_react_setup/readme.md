# React Setup

### Objectives

*SWBAT:*

- Describe the use case for ReactJS
- Check out the documentation
- Set Up a React playground

## Intro

We're going to be working with ReactJS ALL DAY today. Let's start off with a little intro and some basic set up.

## Use Case of React

<!--5 minutes-->

- ReactJS is a JavaScript library for building client-side user interfaces.

- Created by a software engineer at Facebook and used internally in the Facebook & Instagram web apps.

- It was open-sourced in May of 2013.

- Recognized for its high-performance rendering thanks to the implementation of a concept known as the _virtual DOM_.

## Review the React Landing Page

<!--15 minutes-->

- Review landing page of [ReactJS](https://facebook.github.io/react/)

	- Review and discuss **_A Simple Component_**

	- Review and discuss **_A Stateful Component_**

	- Review and discuss **_An Application_**

## Set Up a React Playground

<!--10 minutes-->

- Although real-world React apps require developer tools to compile and build the app, the React docs show us a way to do the necessary processing right in the browser.

- Setting up the playground requires:
	1. Loading several scripts into our _index.html_
	2. Loading our code into script tags and setting the type like this:
	`<script type="text/babel" src="js/app.js"></script>`
	OR  
	You can also play with code inline between script tags like this:
	
```jsx
<script type="text/babel"> 
  // your code in here`  
</script>
``` 

- Let's create a `react-tutorial` directory and an _index.html_ inside of it.

- Go to [this page](https://facebook.github.io/react/downloads/single-file-example.html), view the source (right click -> View Page Source). Let's update our _index.html_ to look like that!

- We are going to put our JS code in a file and include it like this `<script type="text/babel" src="js/app.jsx"></script>` - this way we will have syntax highlighting. **Create** the `js` directory and **touch** an `app.jsx` file inside of it. Notice that the file extension is not simply `.js`!
	
- Our page will need to be served up by a server, so spin up your favorite server. I'll use [http-server](https://www.npmjs.com/package/http-server).
	- Run the server with `http-server` from the root of the react-tutorial directory. Notice that we're not working with port 3000 anymore!
	- If you don't have `http-server` installed, run `npm install -g http-server` first.
	

- Lastly, we will be using a special syntax known as JSX to describe the views in our components.  Let's make Atom aware of this syntax by installing the `react` package.

## Conclusion

We'll be working with React for the rest of the day, so don't worry if you're very confused right now!