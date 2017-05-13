# Intro to NoSQL with Mongo

### Objectives
- Describe how NoSQL databases came about & why they're useful
- Compare and contrast NoSQL with SQL
- Define what a document is in the context of MongoDB
- Issue basic CRUD commands to a database from the Mongo Shell

### Preparation
- Create an Express app from scratch

## What is MongoDB - Intro

#### Overview - Mongo & NoSQL Databases

MongoDB is one of the new breeds of databases known as NoSQL databases. NoSQL databases are heavily used in realtime, big data, and social media applications and generally called NoSQL because they do things a little differently than traditional SQL databases. We'll see what that means in a minute.

So you know – there are software "drivers" that allow MongoDB to be used with a multitude of programming languages and frameworks, including both Node and Ruby on Rails. We'll be talking about it in Express applications later today. If you want to research using it in Rails, take a look at the `mongoid` gem.

For this module, we're using straight up Mongo. So what does a Mongo database look like?

#### Data Format

- A MongoDB database consists of _documents_.
- A _document_ in MongoDB is composed of _field_ and _value_ pairs.

Let's take a look of what a MongoDB _document_ may look like:

```js
{
    _id: ObjectId("5099803df3f4948bd2f98391"),
    name: { first: "Alan", last: "Turing" },
    birth: new Date('Jun 23, 1912'),
    death: new Date('Jun 07, 1954'),
    contribs: [ "Turing machine", "Turing test", "Turingery" ],
    views: 1250000
}
```

__What does this data structure remind you of?__ JSON!

A MongoDB _document_ is very much like JSON, except it is stored in the database in a format known as _BSON_ (think - _Binary JSON_).

_BSON_ basically extends _JSON_ with additional data types, such as __ObjectID__ and __Date__ shown above.

#### The Document *_id*

The *_id* is a special field which represents the document's _primary key_ and will always be listed as the first field. It must be unique.

We can explicitly set the *_id* like this:

```js
{
  _id: 2,
  name: "Suzy"
}
```
or this...

```js
{
  _id: "ABC",
  name: "Suzy"
}
```
However, it's more common to allow MongoDB to create it for us using its _ObjectID_ data type.


#### MongoDB vs. Relational SQL Databases, Terminology

![](http://4.bp.blogspot.com/-edz2_QrFvCE/UnzBhKZE3FI/AAAAAAAAAEs/bTEsqnZFTXw/s1600/SQL-MongoDB+Correspondence.PNG)

#### Key Differences of MongoDB

- Schema-less  
The documents in a MongoDB collection can have completely different types and number of fields from each other.  
__How does this compare to a SQL database like PostgreSQL?__

- No Table Joins  
In a SQL DB, we break up related data into separate tables.

  In MongoDB, we often _embed_ related data in a single document, you'll see an example of this later.

  The supporters of MongoDB highlight the lack of table joins as a performance advantage since joins are expensive in terms of computer processing.

## Installing, Creating a DB, and Inserting Documents - Codealong

#### Installation

You may already have MongoDB installed on your system, let's check by typing `mongod` in terminal (note the lack of a "b" at the end").

If you receive an error, lets use _Homebrew_ to install MongoDB:

1. Update Homebrew's database (this might take a bit of time)  
   `brew update`
2. Then install MongoDB  
 `brew install mongodb`

MongoDB by default will look for data in a folder named `/data/db`. We would have had to create this folder, but Homebrew did it for us (hopefully).

#### Start Your Engine

`mongod` is the name of the actual database engine process. The installation of MongoDB does not set mongoDB to start automatically. A common source of errors when starting to work with MongoDB is forgetting to start the database engine.

To start the database engine, type `mongod` in terminal.

Press `control-c` to stop the engine. **Don't just shut the terminal window.**

#### Creating a Database and Inserting Documents

MongoDB installs with a client app, a JavaScript-based shell, that allows us to interact with MongoDB directly.

Start the app in terminal by typing `mongo`.

The app will load and change the prompt will change to `>`.

List the shell's available commands: `> help`.

Show the list of databases: `> show dbs`.

Show the name of the currently active database: `> db`.

Switch to a different database: `> use [name of database to switch to]`.

Let's switch to the `local` database: `> use local`.

Show the collections of the current database `> show collections`.

#### Creating a new Database

To create a new database in the Mongo Shell, we simply have to _use_ the database.  Let's create a database named _myDB_:

```
> use myDB
```

#### Inserting Data into a Collection

This is how we can create and insert a document into a collection named _people_:

```
> db.people.insert({
    name: "Fred",
    age: 21
})
```

Using a collection for the first time creates it!

#### Adding Lots of New Documents

In a moment we'll practice querying our database, but let's get more data in there. Here are few more documents to put in your _people_ collection. We can simply provide this __array__ to the _insert_ method and it will create a document for each object in the array.

```js
[
  {
    "name": "Emma",
    "age": 20
  },
  {
    "name": "Ray",
    "age": 45
  },
  {
    "name": "Celeste",
    "age": 33
  },
  {
    "name": "Stacy",
    "age": 53
  },
  {
    "name": "Katie",
    "age": 12
  },
  {
    "name": "Adrian",
    "age": 47
  },
  {
  	"age": 7,
  	"favorite_color":"pink"
  }
]
```

> Note: Be sure to type the closing parethesis of the _insert_ method!


## Querying Documents - Codealong

To list all documents in a collection, we use the _find_ method on the collection without any arguments:

```
> db.people.find()
```

Again, unlike the rows in a relational database, our documents don't have to have the same fields!

### More Specific Queries

We can also use the `find()` method to query the collection by passing in an argument – a JS object containing criteria to query with.

```
> db.people.find( {name: "Emma"} )
```

There are a handful of special criteria variables we can use, too. Here's how we can use MongoDB's `$gt` query operator to return all _people_ documents with an age greater than 20:

```
> db.people.find( {age: { $gt: 20 } } )
```

MongoDB comes with a slew of built-in [query operators](http://docs.mongodb.org/manual/reference/operator/query/#query-selectors) we can use to write complex queries.

__How would we write a query to retrieve people that are less than or equal to age 20?__

In addition to selecting which data is returned, we can modify how that data is returned by limiting the number of documents returned, sorting the documents, and by projecting which fields are returned.

This sorts our age query and sorts by _name_:

```
> db.people.find( {age: { $gt: 20 } } ).sort( {name: 1} )
```
The "1" indicates ascending order.

[This documentation](http://docs.mongodb.org/manual/core/read-operations-introduction/) provides more detail about reading data.

## Updating Data - Codealong

In MongoDB, we use the `update()` method of collections by specifying the _update criteria_ (like we did with `find()`), and use the `$set` action to set the new value.

```
> db.people.update( { name: "Emma" }, { $set: { age: 99 } })
```

By default `update()` will only modify a single document. However, with the `multi` option, we can update all of the documents that match the query.

```
> db.people.update( { name: { $lt: "M" } }, { $inc: { age: 10 } }, { multi: true } )
```
We used the `$inc` update operator to increase the existing value.

Here is the [list of Update Operators](http://docs.mongodb.org/manual/reference/operator/update/) available.

## Removing Data - Codealong

We use the `remove()` method to remove data from collections.

If you want to completely remove a collection, including all of its indices, use `db.<name of the collection>.drop()`.

Call `remove({})` on the collection to remove all docs from a collection. Note: all documents will match the "empty" criteria.

Otherwise, specify a criteria to remove all documents that match it:

```
>db.people.remove( { age: { $lt: 16 } } )
```

You can drop the entire database with this:

```
>db.dropDatabase()
```

Probably not a great idea! If you accidentally drop the wrong DB...

![](https://media2.giphy.com/media/qzeGh2dYA3J5K/200.gif)

## Conclusion
- What are some of the differences between Mongo & Postgres databases?
- How do you add a document to a collection in the Mongo shell?
