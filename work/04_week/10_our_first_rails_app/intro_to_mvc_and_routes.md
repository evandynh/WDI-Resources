# Intro to MVC & Routes

* Intro to MVC
* CRUD, basic concepts
* HTTP verbs

## MVC
* MVC is an *architecture* pattern– it's a way to organize our code. 
* It's also a way to *think* about our apps. 

### What MVC Really Is
MVC stands for Model-View-Controller, describing the three responsibilities that we need to write code to address. Let's look at them one by one:

#### Model
The model is the thing that– you guessed it– *models* our data. Which is to say, it's all of the data, along with all of the methods that act on that data. These are the nouns for our app, and the verbs for which that noun is either the subject or the object (in the grammatical sense). 

Let's imagine an extremely simple blogging site– we only need to model users and posts. What might we include in each?

* Users
	* Name (First? Last? Full?)
	* Username
	* Password
	* A method to change the password?
	* A method to log in? Hmmm...

* Posts
	* Title
	* Body
	* A method to edit the title or the body? Hmmm...

#### Views
The view is how we see and interact with the data from our model. So, going back to our blog, one view might be an index of all of our posts, or a user management page, or a page where we can compose and post a... post. 

The view doesn't always need to be HTML and CSS, though, nor does it need to look nice in a web browser. If we were making an API, we might want to write our data out to JSON, then send that JSON back to whatever's asking for it.

#### Controllers
Controllers are the mediators of the whole process. If our user goes to `http://ourbloggingsite.com/posts`, it's the controller's job to see where they were trying to go, interpret that they want to see all the posts, ask our post model for a list of posts, then write that list out to our posts index view. The controller is the thing that takes the request, and we code controllers so that they can meaningfully interpret a request and meaningfully respond. 

### Okay, But Why?
#### Separation of Concerns
That's why. 

Think back to when you were writing your games– we probably got on your case about having a `render` method and tracking your state in a data structure.

There's a reason for this: everything should only do one thing. It's the same reason why you don't keep everything you own in a pile on your floor: a place for everything, and everything in its place. 

MVC gives us a nice, easy way to compartmentalize the functionality of an app– the model only does one thing (store and act on data– fine, two things), the view only does one thing (show and allow for interaction with the model) and the controller only does one thing (receive user requests and send them along to models and views, as appropriate). This significanly reduces our cognitive load and give us a roadmap to where the functionality in our app might go.

Now that we've talked about MVC, let's look at a visual representation to help you wrap your minds around it!

![](http://betterexplained.com/wp-content/uploads/rails/mvc-rails.png)

## CRUD

The 4 Main things you want to do your data-entries in a DB are: 
	
* Create
* Read
* Update
* Destroy

**Wikipedia:** 

In computer programming, create, read, update and delete (as an acronym CRUD) (Sometimes called SCRUD with an "S" for Search) are the four basic functions of persistent storage.

Sometimes CRUD is expanded with the words retrieve instead of read, modify instead of update, or destroy instead of delete. It is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information; often using computer-based forms and reports. 

The term was likely first popularized by James Martin in his 1983 book Managing the Data-base Environment. The acronym may be extended to CRUDL to cover listing of large data sets which bring additional complexity such as pagination when the data sets are too large to hold easily in memory.

Another variation of CRUD is BREAD, an acronym for "Browse, Read, Edit, Add, Delete". This extension is mostly used in context with data protection concepts, when it is legally not allowed to delete data directly. Locking the data prevents the access for users without destroying still needed data. Yet another variation, used before CRUD became more common, is MADS, an acronym for "Modify, All, Delete, Show."

##Using HTTP Methods for CRUD

The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently. Of those less-frequent methods, OPTIONS and HEAD are used more often than others.

Below is a table summarizing recommended return values of the primary HTTP methods in combination with the resource URIs:


| HTTP Verb  | CRUD action  | SQL command | ActiveRecord
|---         |---           |---          |---
| POST       | Create       | INSERT      |.create
| GET        | Read         | SELECT      |.find_by/.where
| PUT        | Update       | UPDATE      |.update/.save
| DELETE     | Delete       | DELETE      |.destroy


The POST verb is most-often utilized to **create** new resources. 

The HTTP GET method is used to **read** (or retrieve) a representation of a resource. In the “happy” (or non-error) path, GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).

## Standard Routes

### `index`
Renders a list of all the records (or a sanely-selected subset).

### `new`
Renders a form that we can fill out to make a new record. Hitting "submit" on the form starts the POST request that ends up at `create`.

### `create`
Takes inputs (in the `params` hash) and makes a new object out of them. 

### `show`
Renders the page for a particular record. 

### `edit`
Similar to `new`, but shows a form for a particular existing record, so that you can edit it and PUT (or PATCH) it to `update`.

### `update`
Takes inputs (again, in the `params` hash, this time  including an ID), finds the record with that ID, and persists the new information for that record in the database.

### `destroy`
Finds a record with the ID we passed in, and deletes it from the database.