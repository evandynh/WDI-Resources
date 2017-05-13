# Build Something with Embedded and Referenced

### *SWBAT*

- Build out models with embedded and referenced relationships
- Build out controllers for embedded and referenced relationships

## Examine the Starter Code

Copy the [starter code](./starter_code) to your workspace. Let's walk through it to see what's going on!

Start up nodemon and check for errors.

## What We're Building

This library will have three models:

- Author
- Book (embedded in Author)
- Genre (referenced in Book)

## Codealong

Let's work through each resource in this order:

- Model
- Controller
- Routes
- Views

Which resource should we start with, based on the relationships listed above?

### Genre

Let's do Genre first.

#### Model

Make a new directory for models, then create a file in the models directory for genre:

```bash
mkdir models
touch models/genre.js
```

Now fill in the model file:

```js
var mongoose = require('mongoose')

var genreSchema = new mongoose.Schema({
  name: String
})

var Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre
```

#### Controller

Make a new directory for controllers, then create a new file in the controllers directory for genre:

```bash
mkdir controllers
touch controllers/genres.js
```

```js
var Genre = require('../models/genre')

function newGenre(req, res) {
  res.render('genres/new')
}

function createGenre(req, res) {
  var genre = new Genre(req.body)

  genre.save(function(err, genre) {
    if(err) throw err

    res.redirect('/')
  })
}

module.exports = {
  newGenre: newGenre,
  createGenre: createGenre
}
```

#### Routes

Make a new directory for routes, then create a new file in the routes directory for genre:

```bash
mkdir config/routes
touch config/routes/genres.js
```

```js
var express = require('express'),
    router = express.Router(),
    {newGenre, createGenre} = require('../../controllers/genres')

router.post('/', createGenre)
router.get('/new', newGenre)

module.exports = router
```

#### Views

How many views do we need, based on the routes?

Make a new directory in the views directory for genres. Then make a view template in that diectory:

```bash
mkdir views/genres
touch views/genres/new.ejs
```

```html
<!DOCTYPE html>
<html>
  <head>
    <% include ../partials/head %>
  </head>
  <body class="container">
    <h1>New Genre</h1>
    <form action="/genres" method="POST">
      <div class="form-group">
        <label>Name:</label>
        <input type="text" name="name" placeholder="Name" class="form-control">
        <input type="submit" value="Add Genre" class="btn btn-primary">
      </div>
    </form>
    <br>
    <% include ../partials/footer %>
  </body>
</html>
```

Lastly, let's update `server.js` to use the genre routes:

```js
var genres = require('./config/routes/genres')
app.use('/genres', genres)
```

Test it out! Before we move on, let's deal with any errors.

### Author

Let's do Author next. We'll have to make some adjustments after we create Book, but not many.

#### Model

Make a new file in the models directory for author:

```bash
touch models/author.js
```

Now fill in the model file:

```js
var mongoose = require('mongoose')

var authorSchema = new mongoose.Schema({
  name: String
})

var Author = mongoose.model('Author', authorSchema)

module.exports = Author
```

#### Controller

Make a new file in the controllers directory for author:

```bash
touch controllers/authors.js
```

```js
var Author = require('../models/author')

function newAuthor(req, res) {
  res.render('authors/new')
}

function createAuthor(req, res) {
  var author = new Author(req.body)

  author.save(function(err, author) {
    if(err) throw err

    res.redirect('/')
  })
}

module.exports = {
  newAuthor: newAuthor,
  createAuthor: createAuthor
}
```

#### Routes

Make a new file in the routes directory for author:

```bash
touch config/routes/authors.js
```

```js
var express = require('express'),
    router = express.Router(),
    {newAuthor, createAuthor} = require('../../controllers/authors')

router.post('/', createAuthor)
router.get('/new', newAuthor)

module.exports = router
```

#### Views

How many views do we need, based on the routes?

Make a new directory in the views directory for authors. Then make a view template in that diectory:

```bash
mkdir views/authors
touch views/authors/new.ejs
```

```html
<!DOCTYPE html>
<html>
  <head>
    <% include ../partials/head %>
  </head>
  <body class="container">
    <h1>New Author</h1>
    <form action="/authors" method="POST">
      <div class="form-group">
        <label>Name:</label>
        <input type="text" name="name" placeholder="Name" class="form-control">
        <input type="submit" value="Add Author" class="btn btn-primary">
      </div>
    </form>
    <br>
    <% include ../partials/footer %>
  </body>
</html>
```

Now, let's update `server.js` to use the author routes:

```js
var authors = require('./config/routes/authors')
app.use('/authors', authors)
```

Test it out! Before we move on, let's deal with any errors.

### Book

Now that Genre and Author exist, we can build out Book.

#### Model

Make a new file in the models directory for book:

```bash
touch models/book.js
```

Now fill in the model file:

```js
var mongoose = require('mongoose')

var bookSchema = new mongoose.Schema({
  title: String,
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }]
})

var Book = mongoose.model('Book', bookSchema)

module.exports = Book
```

Let's update the Author model to include embedded books:

```js
var mongoose = require('mongoose'),
    Book = require('./book')

var authorSchema = new mongoose.Schema({
  name: String,
  books: [Book.schema]
})

var Author = mongoose.model('Author', authorSchema)

module.exports = Author
```

#### Controller

Make a new file in the controllers directory for books:

```bash
touch controllers/books.js
```

```js
var Book = require('../models/book'),
    Genre = require('../models/genre'),
    Author = require('../models/author')

function newBook(req, res) {
  Genre.find({}, function(err, genres) {
    if(err) throw err

    Author.find({}, function(err, authors) {
      if(err) throw err

      res.render('books/new', {genres: genres, authors: authors})
    })
  })
}

function createBook(req, res) {
  console.log('Req.body', req.body)
  Author.findById(req.body.author, function(err, author) {
    if (err) throw err

    console.log(author)
    author.books.push({
      title: req.body.title,
      genres: req.body.genres
    })
    author.save(function(err, author) {
      if(err) throw err

      res.redirect('/')
    })
  })
}

module.exports = {
  newBook: newBook,
  createBook: createBook
}
```

#### Routes

Make a new file in the routes directory for books:

```bash
touch config/routes/books.js
```

```js
var express = require('express'),
    router = express.Router(),
    {newBook, createBook} = require('../../controllers/books')

router.post('/', createBook)
router.get('/new', newBook)

module.exports = router
```

#### Views

Make a new directory in the views directory for books. Then make a view template in that diectory:

```bash
mkdir views/books
touch views/books/new.ejs
```

```html
<!DOCTYPE html>
<html>
  <head>
    <% include ../partials/head %>
  </head>
  <body class="container">
    <h1>New Book</h1>
    <form action="/books" method="POST">
      <div class="form-group">
        <label>Title</label>
        <input type="text" name="title" placeholder="Title" class="form-control">
      </div>
      <div class="form-group">
        <label>Author:</label>
        <select name="author" class="form-control">
          <% authors.forEach(function(author) { %>
            <option value=<%= author._id%>>
              <%= author.name %>
            </option>
          <% }) %>
        </select>
      </div>
      <div class="form-group">
        <label>Genres:</label>
        <% genres.forEach(function(genre) { %>
          <input class="checkbox-inline" type="checkbox" name="genres" value=<%= genre._id %> > <%= genre.name %>
        <% }) %>
      </div>
      <div class="form-group">
        <input type="submit" value="Add Book" class="btn btn-primary">
      </div>
    </form>
    <% include ../partials/footer %>
  </body>
</html>
```

Now, let's update `server.js` to use the book routes:

```js
var books = require('./config/routes/books')
app.use('/books', books)
```

Test it out! Before we move on, let's deal with any errors.

### Main

Now that we have our resources all set up, let's make a main controller, routes file, and view to render all of the information for our library on our landing page.

#### Controller

```bash
touch controllers/main.js
```

```js
var Author = require('../models/author'),
    Genre = require('../models/genre')

function index(req, res) {
  Author.find({})
  .populate('books.genres')
  .exec(function(err, authorsList) {
    if(err) throw err
    res.render('index', {authors: authorsList})
  })
}

module.exports = {
  index: index
}
```

#### Routes

```bash
touch config/routes/main.js
```

```js
var express = require('express'),
    router = express.Router(),
    {index} = require('../../controllers/main')

router.get('/', index)

module.exports = router
```
#### Views

Now let's make `index.ejs`.

```bash
touch views/index.ejs
```

```html
<!DOCTYPE html>
<html>
  <head>
    <% include ./partials/head %>
  </head>
  <body class="container">
    <h1>The Library</h1>
    <ul>
      <% authors.forEach(function(author) { %>
        <li> <strong><%= author.name %></strong> </li>
        <ul>
          <% author.books.forEach(function(book) { %>
            <li> <%= book.title %> </li>
            (<em>
              <% book.genres.forEach(function(genre) { %>
                <%= genre.name %>
              <% }) %>
            </em>)
          <% }) %>
        </ul>
      <% }) %>
    </ul>

    <div>
      <a href="/genres/new" class="btn btn-success"> Add a New Genre </a>
      <a href="/authors/new" class="btn btn-success"> Add a New Author </a>
      <a href="/books/new" class="btn btn-success"> Add a New Book </a>
    </div>
  </body>
</html>
```

Now, let's update server.js to use the main routes:

```js
var main = require('./config/routes/main')
app.use('/', main)
```

Make sure to get rid of the former root route!

## Conclusion

- What are some use cases for an embedded relationship?
- What are some use cases for a reference relationship?