# Intro to Node.js

### Objectives
- Explain what Node.js is & why it exists
- Compare and contrast Node/Express vs. Ruby/Rails
- Use module.exports and require to organize code

### Preparation
- Write basic Javascript
- Understand backend vs. front-end
- Have written a Rails application

## What is Node.js? - Intro

The makers of Node.js took javascript (which normally only runs in the browser) and made it available in your computer (on the server side). They took Google's V8 JavaScript Engine and gave it the ability to compile JS programs into machine code.

Keep in mind, Node.js is strictly a tool to run JavaScript on a server. It is a *runtime*. While it's possible to build web applications and APIs in straight JS, we'll actually be using a framework on top of Node called Express. It's actually quite similar to Rails - you'll like it!

#### Why are people excited about Node?

It's new(ish) and hot in the industry, but why does it matter?

A lot of developers and companies are excited because it allows you to build fast, scalable APIs and sites in JavaScript. We're _familiar_ with JS, and being able to use it on the backend gives us the option to use a single programming language throughout an entire full-stack application.

#### Asynchronous

On top of that, one of the big differences is that Node.js is designed to be _event-driven_ and _asynchronous_. While earlier frameworks can only do one thing at a time, Node purposefully sends nearly everything to the background and keeps going.

Imagine a paper delivery boy riding on his bike delivering papers every morning. Imagine he stops at each house, throws the paper on the doorstep, and waits to make sure the resident comes out and picks it up before moving on to the next house. That would be what we'd call _blocking_ – each line of code finishes before moving on to the next line of code.

Now imagine the paperboy throwing the newspaper on your porch but never stopping his bicycle; never stopping, he just keeps throwing papers on porches, so that by the time you pick it up he'll be 3 or 4 houses down. That would be _non-blocking_, or _asynchronous_.

While it means you'll have to think & write your code a little differently than you did with a blocking framework like Rails, the benefit of speed is one thing a lot of folks are excited about with Node.

#### Ruby/Rails vs. JS/Node/Express

While not strictly a competition (one of the skills you have to practice is knowing which frameworks you should use in which situations), let's compare some differences.

__Why Choose Rails?__
- Quickest path to building apps with full CRUD
- Better at working with complex data relationships - ActiveRecord rocks!
- When full page refreshes aren't an issue
- Synchronous programming is probably a little easier to grasp in building a straightforward program

__Why Choose Node/Express?__
- JavaScript everywhere, one language to rule them all
- Asynchronous means generally faster performance
- Better _concurrency_ – it can serve data to more users with fewer computer resources
- Designed to make realtime applications

#### Installing Node.js

To check if you already have Node installed, type: ``node -v`` in terminal. You will see the Node version if it's installed.

Node and nvm (node version manager) should have been installed by installfest. To upgrade your node version use:

```
nvm install node
```
[nvm documentation](https://github.com/creationix/nvm#manual-upgrade)

If it's not installed, you can install from the Node.js website, or better yet, use Homebrew like this:
```
brew install node
```

This will install both Node.js and npm, a package manager for Node similar to rubygems for Ruby. One of the advantages of using Homebrew is that you can update your versions easily like this:

```
brew upgrade node
```
*Run* `brew update` *first.*

## Getting reacquainted with JS - Codealong

Before we go further, you should try to test it out. You'll have to start refreshing the JS side of your brain, so spend a couple minutes testing out some basic JS and running it with Node.

There are two ways to do this – try them both.

#### Interactive Node

If you simply type node in terminal, you will launch Node's REPL (Read-Eval-Print-Loop) interactive utility. Think of the Node REPL as Node's version of Ruby's IRB. Let's test it:

```js
node

> 10 + 5
// 15

> var a = [ 1, 2, 3]
// undefined

> a.forEach(function(v) {
... console.log(v)
... })
// 1
// 2
// 3

> var http = require('http')
// undefined

> http
// [ a massive 'http' object returned from the 'http' module ]
```

Press control-c twice or type `.exit` to exit the node REPL.

#### Executing a JS program

Write and execute some code in a file! In your workspace:

```bash
mkdir first-node
cd first-node
touch main.js
echo "console.log('hello world')" >> main.js
node main.js
# hello world
rm main.js
```

## Node Modules - Codealong

Like most other modern languages, Node is modular. In essence, if a file puts something inside of module.exports, it can be made available for use in any other file using `require()`.

For example, let's make two files: `touch my-module.js main.js`

```js
// my-module.js

var number = 7

module.exports.name = "Freddie"

module.exports.arr = [1, 2, 3]

module.exports.getNumber = function(){
    console.log("Get number called. Returning: ", number)
    return number
}

console.log("End of my-module.js file")
```


```js
// main.js

// here we're grabbing everything that's "exported" in our other file, and storing it a variable called 'myModule'
var myModule = require('./my-module')

// variables and such that were not exported aren't in scope
console.log("number is " + typeof number) // undefined

// anything exported can be accessed on the object
console.log("Name is: ", myModule.name)

// closures are still closures
console.log("The number is: " + myModule.getNumber())

// javaScript is still JavaScript
console.log("The array contains " + myModule.arr.length + " elements")

// let's see the module we imported
console.log(myModule)
```

Then try running:
```
node my-module.js
node main.js
```

#### Things to Note

`module.exports` - this is an object to store the things that a module _exports_, i.e. shares with a file that has *required* it  

`require()` - returns the `module.exports` of the file that was required; it should normally be stored in a variable.

> Note: The module's source file is only executed the first time that file is required.

## npm - "Node Package Manager" - Demo 

Though it's frequently referred to as a package manager, technically, the founders of Node are quite frank when they say: "[npm] is a recursive bacronymic abbreviation for 'npm is not an acronym'." If it were then called NINAA, it _would_ actually be an acronym.  

I think of it like the guy who created the gif and said to pronounce it like jiff; there's no reason for it, so he should be ignored. Same goes for npm; we can refer to it as node package manager, because it makes sense and calling it that doesn't hurt anything.

Before we practice using npm, you should know more: Node uses a package management system to distribute open-source modules, just like gems.

We can use the **N**ode **P**ackage **M**anager by running its command, `npm`.

`npm` is similar to the `gem` and `bundle` commands from Ruby. But instead of using a `Gemfile`, `npm` uses a file called `package.json`.

| Ruby | Node.js |
| ---- | ------- |
| `gem install ... ` | `npm install ...` |
| `bundle install` (works when `Gemfile` is found) | `npm install` (works when `package.json` is found)|
| `bundle update` | `npm update` |
| `rails s` | `npm start` (provided start is defined in `package.json`) |

You'll use this in a handful of lessons in the coming week. For now, let's focus on you making a quick module of your own!

## Independent Practice

Partner up with your neighbor - your task is to make a module together (`car.js`) that defines a car – with both properties and functions – and export it as a module to a `main.js` file.

In the `car.js` file:

Properties should include:
- color, convertible (boolean), speed (0, at first)

Functions specs:
- include accelerate and decelerate
  - these should take one argument, the speed, and add or substract it the from the current speed
  - return a string with the old speed and new speed
- call these functions at the bottom of the file

In the `main.js` file, be sure to require the module and console log a message about your car object, including the current speed of the car. 

## Conclusion

<!--Note: Review the solution to the independent practice
-->
- What are some of the important distinguishing features of Node?
- How can you run JS on your computer interactively? How can you run a JS file?
- How do `module.exports` & `require()` work?