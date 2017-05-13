[The slides for this markdown](https://presentations.generalassemb.ly/fd707db191b70dc7ef2e4ae4a22547b8)

---

![](http://featurebranch.com/the-two-biggest-bugs-fixed-in-rails-4-1/doge-on-rails-c5978b18.jpg)

# ActiveRecord CRUD
---

## Learning Objectives

- Seed a Database with Initial Data

- Query a Model Using AR Methods

- Update a Model's Attributes

- Destroy a Model

---
## Review

So far, you've:

- Learned how data is structured in a relational database.

- Created model classes that inherit from `ActiveRecord::Base`.

- Created instances of models and persisted them in the database.

Now we're going to explore more of the convenience and power provided by <em>ActiveRecord</em>.</p>

---

## Setup

---

### The Starter Code

- In the repo for this lesson there is some starter code in a folder named `starter_code`. Copy it out of the class repo and into your workspace.

- After we copy or clone the code of a Rails app, it will not run - typing `rails s` will cause an error. We first need to run some commands:
	1. Install the gems:<br>`bundle install`
	2. Create the database:<br>`rake db:create`
	3. Create the schema for the database:<br>`rake db:migrate`

- Now we should be able to start the Rails server: `rails s`

---

### Seeding Data

- Often, you will want to initialize your database with some data. Perhaps there are tables being used as _lookup data_, e.g. a table that contains _categories_ for an inventory application.

- Or, as in today's lesson, since you already know how to create data using models, provide some initial data that we can retrieve and update.

- Rails creates a file to put our code in that seeds our database:<br>`db/seeds.rb`

- Let's review the code in our `seeds.rb` file.

- Now, let's seed our database:<br>`rake db:seed`

---

## Getting CRUD-Y

---

### The C in CRUD

- In the previous lesson we learned how to **create** data.

- **One way is with the __________ + __________ method.**

- **The other way is with the __________ method.**

---

### The C in CRUD (cont.)

- **The `new` and `create` methods are called on the __________.**

- **The `save` method is called on an __________.**

- **In this lesson, we already created several `Person` models in the database using the __________ command in Terminal.**

---

### The C in CRUD (cont.)

- Just to get in the mood for CRUD, get into the _Rails Console_ (you remember how, right?) and create one more `Person` model in the database.

- You can check the number of `Person` models in the database using the `count` class method:<br>`Person.count`

- **What's the name of the table holding our `Person` objects?**

---

## The R in CRUD

---

### The R in CRUD

- Now that we have plenty of `People` to work with, let's move on to the **R** in CRUD - **Read** data.
 
- We will touch upon the following methods:
	- `all`
	- `first` and `last`
	- `find`
	- `find_by`
	- `where`

---

### The R in CRUD - The all Method

- Give me everything you've got!

	```ruby
	Person.all
	```

- Technically, the `all` method returns an _ActiveRecord Relation_, which is a way of Rails holding on to a query until it's necessary to hit the database. Think of it as a "lazy" query that we can modify before finally being sent to the db.

---

### The R in CRUD - The first and last Method

- `first` and `last` are a couple of nifty methods that do just what they say, return the `first` and `last` models in the table respectfully.

- Try them out:

	```ruby
	Person.first
	Person.last
	```

---

### The R in CRUD - The find Method

- How about finding one particular Person model?

- We've seen how each new row is automatically assigned an `id` and how it increases by 1 each time we add a new record/model. This `id` can come in handy for retrieving a single model.

- Let's fetch the `Person` with an `id` of 3:

	```ruby
	Person.find(3)
	```

---

### The R in CRUD - The find Method (cont.)

- `find`, when passed a single `id`, will return a single model object, or an _ActiveRecord::RecordNotFound_ error if the `id` does not exist.

- You can also pass an array of `id`'s too! In this case, an **array** of models will be returned.

- **What code would we type to find the `Person` models with <br>`id`'s of 2, 4 & 6?**

---

### The R in CRUD - The find_by Method

- The `find_by` method allows us to query the database for the **first** model that matches our criteria:

	```ruby
	Person.find_by(age: 50)
	```

- `nil` is returned if there's no match.

- You can include more attribute/value pairs by separating them with commas:

	```ruby
	Person.find_by(age: 50, first_name: 'Sean')
	```

---

### The R in CRUD - The where Method

- While `find_by` returns a single object, `where` returns an **array** of object(s); or `nil` if no records match our condition.

- <em>Hey database, give me all the people that are 50 years old.</em>:

	```ruby
	Person.where(age: 50)
	```
- So, unlike `find_by`, which returns only the first match, `where` returns all records matching our criteria:

	```ruby
	Person.where(age: 50).count
	# => 2
	```

---

### The R in CRUD - The where Method (cont.)

- For maximum flexibility, the `where` method also accepts a string that represents a SQL condition, just like in SQL's WHERE clause.

- <em>Find me all people older than 20 years old and whose first_name starts with a "P".</em>:

	```ruby
	Person.where("age > 20 AND first_name LIKE 'P%'")
	```

---

### The R in CRUD - The where Method (cont.)

- When methods like `where` and `all`, return an _ActiveRecord Relation_, you can chain methods after them. Methods like  `first`, `last`, or even an `each` loop:

	```ruby
	Person.where("age > 60").each do |p|
		# Do something with each model: update it, whatever...
		puts p
	end
	
	Person.where("first_name LIKE 'B%'").first
	```

---

### The R in CRUD<br>So which method should I use?

- What finder methods should you use? Decisions, decisions...

- If you know the `id` of an object you want to retrieve, always use `find` as it is the most performant.

- Otherwise, the choice between `find_by` and `where` depends upon whether you want only the first match or all matches respectively.

---

### The R in CRUD - The Power of Queries

- _ActiveRecord_ provides enormous power and flexibility when querying a database.

- We've only scratched the surface. There is a link at the end in the _references_ section that covers querying in detail.

- For example, for simplicities sake, we looked at how we can pass a SQL WHERE clause as a string with values embedded within the string. Be sure to check _section 2 Conditions_ of the docs to see how we can pass the values as arguments.

---

### The R in CRUD - Questions

- **If we know the `id`(s) of our model(s), we should use the ________ method to retrieve data because...?**

- **Some AR methods return an ActiveRecord Relation, why is this advantageous to the developer?**

---

## The U in CRUD

---

### The U in CRUD

- We have created and have read data. Now, give me a **U**!

- There will certainly be times when you need to update your app's data. Let's start by retrieving a person and storing it in a variable:

	```ruby
	p = Person.first
	```

- Updating is pretty easy, and we can do it in a couple of ways, similar to how we used `new` and `create` when we learned how to create data previously...

---

### The U in CRUD - Updating With The save Method

- We've got our person stored in our `p` variable. Let's change<br>Mr. Kim's _age_ to equal 21:

	```ruby
	p.age = 21
	p.changed?
	=> true
	p.save
	p.changed?
	=> false
	```

- This approach works just fine, however, if we need to update several attributes, it can get a little verbose.

- We can use the `changed?` method on a model object to check if its attributes have been updated but not persisted in the database.

- Rails provides us a way to do it with a single line of code...

---

### The U in CRUD - Updating With The update_attributes Method

- Using the `update_attributes` method, we can pass in a hash of whatever attributes in a model we want to change:

	```ruby
	p.update_attributes(first_name: 'Ben', age: 22)
	```
- `update_attributes`, like `save`, returns `true` or `false`.

- Note that we don't _have_ to wrap the arguments with curly braces. This is known as an implicit hash.

- **What controller action will `update_attributes` come in handy?**

---

### The U in CRUD - Review Question

- **Assuming we have retrieved a model from the database and stored it in a variable, what is one of the two approaches we can use to update its attributes and persist it to the database?**

- **What's another approach?**

---

### The U in CRUD - Practice Updating Data

- Now, take a few minutes to update the person model with an `id` of 3. Set the _age_ equal to _6_ and the _first\_name_ to _Maria_.<br><br>You may use either update approach to perform this task.

---

## The D in CRUD

---

### The D in CRUD

- Finally, the most devastating CRUD operation - deleting data.

- **Does anyone remember the method we had a glimpse of earlier that removes _all_ rows/models from a table?**

- There are two methods we can call on a given model instance to remove it from the databse:
	- `delete`
	- `destroy`

---

### The D in CRUD - The destroy Method

- In WDI, we will be using the `destroy` method 100% of the time:

	```ruby
	Person.find_by(first_name: 'Ronald').destroy
	```

- There's no way to bring back a record after deleting it. Bye, bye Ronnie!

- Because we will be using the `destroy` method 100% of the time in class, there's no reason to look at the `delete` method. You're welcome to research the difference if you're curious.

---

## Summary

- Now you know how to perform full CRUD on your models.

- Even though we've only practiced in the Rails console, the code we have worked with will work the same in your controllers.

- In Rails, there are several different ways to accomplish the same thing, but the basics that you've seen will take you far.

---

## Final Questions

- **Describe two ways to update a model instance?**

- **Of the two ways to update a model, when might one be more convenient than the other?**

- **What's the difference between what you get back when querying with `where` and `find_by`?**

- **How do you permanently remove a model from the database?**

- **How do we determine the number of models (rows) in a table or query?**

---

## References

[ActiveRecord Query's](http://guides.rubyonrails.org/active_record_querying.html#retrieving-multiple-objects-in-batches)
