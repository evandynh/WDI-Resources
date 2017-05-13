# Build React Boilerplate

### Objectives

*SWBAT:*

- Build a reusable react bolierplate

## Intro

If you want to build several react apps to practice your skills, you will probably start with the same basic structure. During this module, we'll build our own boilerplate, which can be used as a starting point for future projects.

## `package.json` and `server.js`

Let's use node and express in our boilerplate so that we can run the app with nodemon and view it on localhost:3000.

Create a new node and express app in your workspace with these steps:

```bash
mkdir react_boilerplate
cd react_boilerplate
touch server.js
npm init -f
npm install express --save
```

Now open this directory in atom. Let's add very basic code to our server.js file:

```js
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000

app.use(express.static('public'))

app.listen(port, function() {
  console.log('App is running on port', port)
})
```

This line, `app.use(express.static('public'))`, says that we're going to use a public directory for our front end code. Let's create that directory and two files.

```bash
mkdir public
touch public/index.html public/app.jsx
```

Notice the file extension on `app.jsx`!

In `index.html` we'll source in babel, react, react-dom, and `app.jsx` with script tags.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React Boilerplate</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>
  </head>
  <body>
    <div id="app"></div>

    <script type="text/babel" src="app.jsx"></script>
  </body>
</html>
```

Notice that our `app.jsx` file is sourced in with a script tag with type "text/babel", not "text/javascript"!

Now let's render an h1 in `app.jsx` using ReactDOM:

```jsx
ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('app')
)
```

The second argument in `ReactDOM.render` is grabbing the one div we have in our HTML file and saying, "put my code there!"

Start nodemon and check out localhost:3000. You should see the h1 rendering.

## Build a Component

Instead of rendering the h1 right inside ReactDOM.render, let's build a component and render *that* in ReactDOM.render.

Since we're using this app as boilerplate for future projects, let's just call our component Main.

In `app.jsx`, above ReactDOM.render, let's add this:

```jsx
var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello from the Main component!</h1>
      </div>
    )
  }
})
```

We are defining a component called Main, which returns a `div` with an `h1` inside of it. The render method in a component can only return **one** HTML element, so it's a good idea to render a `div`, which can contain a bunch of other elements within it.

Now, let's update our ReactDOM.render method to render the Main component instead of an h1.

```jsx
ReactDOM.render(
  <Main/>,
  document.getElementById('app')
)
```

We are still targeting the div with id *app* on our `index.html` file, but now we are rendering the Main component. Check it out in the browser!

## Webpack

Now that we have the verrrrry basic functionality of a React app, it's a good time to introduce Webpack. Webpack is a bundler which we can use to bundle our dependencies and components so they are ready to go when we start the server.

Just like nodemon, webpack should be installed globally.

```bash
npm install -g webpack@1.12.13
```

The `@` lets us specify which version to install.

Let's use npm for React and ReactDOM instead of cdn links. These are *not* globally installed.

```bash
npm install --save react react-dom
```

We also need some dev-dependencies.

```bash
npm install --save-dev webpack@1.12.13 babel-core babel-loader babel-preset-es2015 babel-preset-react
```

When have we used `--save-dev` before?

Yes, we do need webpack as a dev-dependency even though it's globally installed. We're specifying the version because webpack's current version (2) has some differences and we want to use webpack version 1 today.

### Refactoring

Since we're going to be using webpack and node modules, we no longer need the CDN scripts in our index.html. Let's take 'em out! We will also change the script tag in the body, so our HTML file now looks like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React Boilerplate</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="bundle.js"></script>
  </body>
</html>
```

Let's create a new file to configure webpack:

```bash
touch webpack.config.js
```

That file must be named exactly! Just like `nodemon` looks for `package.json`, `webpack` looks for `webpack.config.js`.

Let's fill out that file:

```js
module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
```

Everything is inside `module.exports` - just like the `package.json` file! That's a lot of code in there! Let's walk through it.

If you run the webpack command without a config file, you must pass it two arguments: the file your want to bundle (`app.jsx`), and the destination file (`bundle.js`). In the config file, we're defining "entry" and "output" so we can run the webpack command without any arguments.

Resolve is where we define which file extensions we'll accept in the bundle. We're saying files with no extension, `.js`, and `.jsx` should all be included in the bundle.

The module loaders allow us to use the `babel-loader` module to convert our react and es2015 (es6) code into regular old JavaScript that is browser-friendly.

![Browser Friendly](https://media.giphy.com/media/zy52pD08yCIg/giphy.gif)

Now that we have the webpack configuration written, let's refactor our `app.jsx` file. React is being brought in as a node module now, so we need to require it. Same goes for ReactDOM. `app.jsx` should now look like this:

```jsx
var React = require('react'),
  ReactDOM = require('react-dom')

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello from the Main component!</h1>
      </div>
    )
  }
})

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
)
```

Run `webpack`, then check localhost:3000. Everything should still be working. If it's not, check out the errors!

### Separate Component

One of the highlights of React is the ability to reuse components. With this app we're just building a basic boilerplate setup, so we're not going to have many components, but it's good to see how that structure would work.

Let's separate the Main component into its own file. Create a directory called `components` inside `public` and create a new file for our Main component.

```bash
mkdir public/components
touch public/components/Main.jsx
```

Notice that the file name is capitalized. That is a convention in React.

Now, cut this out of `app.jsx` and paste it into `Main.jsx`:

```jsx
var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello from the Main component!</h1>
      </div>
    )
  }
})
```

`Main.jsx` also needs to require React and have a module.exports. The full file should look like this:

```jsx
var React = require('react')

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello from the Main component!</h1>
      </div>
    )
  }
})

module.exports = Main
```

Back in `app.jsx`, we need to require `Main.jsx`. `app.jsx` should now look like this:

```jsx
var React = require('react'),
  ReactDOM = require('react-dom'),
  Main = require('./components/Main')

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
)
```

Requiring components with relative paths could get tedious, so let's use webpack to make it easier for us.

Inside resolve, we can give each of our components aliases so that we can require them without having to type out relative paths.

```diff
module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
+   root: __dirname,
+   alias: {
+     Main: 'public/components/Main.jsx'
+   },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
```

Now we can update `app.jsx`:

```diff
var React = require('react'),
  ReactDOM = require('react-dom'),
- Main = require('./components/Main')
+ Main = require('Main')

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
)
```

### Shuffling

![Shuffling](https://media.giphy.com/media/q0KrtRcr10Bhu/giphy.gif)

Since webpack is bundling all of our jsx code, that's the only JavaScript file we need in the public directory. Let's move `app.jsx` and the components directory. Create a new directory at the root of the project called `app`.

```bash
mkdir app
```

Move the components directory and `app.jsx` into the app directory. Now we need to update `webpack.config.js` again:

```diff
module.exports = {
- entry: './public/app.jsx',
+ entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
-     Main: 'public/components/Main.jsx'
+     Main: 'app/components/Main.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
```

Run `webpack`, then check localhost:3000. Everything should still be working. If it's not, check out the errors!

Wow, running `webpack` over and over is getting to be a real pain, isn't it? You're in luck! We can run `webpack -w` and it works a lot like nodemon - it will listen for changes and rebundle as needed.

![High five](https://media.giphy.com/media/OcZp0maz6ALok/giphy.gif)

## Wrapping Up

At this point, if you want to, you can remove the Main component and all traces of it. If you want to keep it as a template for creating a simple, static component, leave it in! If you want to remove it to have barebones boilerplate, here are the steps:

1. Delete the `Main.jsx` file. You should leave the components directory, since any app you build will have components.
2. Change `app.jsx` to not need the Main component:

  ```diff
  var React = require('react'),
  + ReactDOM = require('react-dom')
  - ReactDOM = require('react-dom'),
  - Main = require('Main')

  ReactDOM.render(
  - <Main/>,
  + <h1>Boilerplate</h1>,
    document.getElementById('app')
  )
  ```
3. Remove the alias for Main from `webpack.config.js`:

  ```diff
  alias: {
  - Main: 'app/components/Main.jsx'
  },
  ```

4. Check that everything still works in the browser.

That's it!

![Group High Five](https://media.giphy.com/media/1HPzxMBCTvjMs/giphy.gif)