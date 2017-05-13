[Click here for the slides for this markdown](https://presentations.generalassemb.ly/0aef1b0ffb33cb22b1bafe790b7a9115)

---

![image](http://alinaguzman.com/wp-content/uploads/2013/07/RubyOnRails1.png)
# Intro to Models in ActiveRecord

---

## Learning Objectives

- Explain the Use Case for ActiveRecord

- Generate a Model

- Run a Migration

- Explain What a Migration Does

- Create Data Using Models

---

## What is ActiveRecord?

- _ActiveRecord_ is the layer of the Rails framework dedicated to working with data.

- _ActiveRecord_ implements the M in the MVC application architecture.

- Earlier, you saw how how data is stored in _rows_ in a relational database where each row represented a single instance of a specific data entity, e.g., a blog post, a comment, an author, etc...

---

## What is ActiveRecord? (cont.)
<br>

- As "fun" as it is writing SQL commands to create tables and perform CRUD on data, _ActiveRecord_ provides us with a more productive, a more objected-oriented way to work with data in our application.

- _ActiveRecord_ is what we call an _Object-Relational-Mapper_, or ORM. ORM's are very popular in the world of software development because they allow us to work with data in our code via objects and methods, abstracting away the DB to the point we don't even know it's there.

---

## Models

---

### Intro to Models

- In Rails, a Model is a class that represents a data entity. For example:

![](http://guides.rubyonrails.org/images/has_many.png)

---

- Things to note:
	- A model is a class that inherits from the `ActiveRecord::Base`** class.
	- Every model in our app will have a dedicated table in the database.
	- No attributes are defined in the model class. The attributes are defined in the database table's schema.
	- We use models to define relationships with other models (as shown here with `has_many :orders`).
   - Models are where we put code to validate data and add custom behavior like providing a `full_name` method.

---

### Intro to Models

- Here's the code for the `Order` model in the example:


![](http://guides.rubyonrails.org/v3.2.21/images/belongs_to.png)

- **A database review question: What type of column is the `customer_id` column in the `orders` table?**

---

### Working with Models - Workflow

For your reference, here's a list of steps you might follow to start a new Rails app that uses models:

1. We'll be working with the PostreSQL database so be sure to create your new app like this:<br>`rails new my_app -d postgresql -T`
2. Run this command to create the database:<br>`rake db:create`
3. Start the Rails server with `rails s` and browse to `localhost:3000` to ensure all is well before creating any models.
4. Use `rails g model...` to generate your model's class file and database migration file.
5. Run `rake db:migrate` to update the database's schema (structure) with any pending migrations.
6. Code your routes, controller & views as usual.

Ready? Let's try it out...

---

## Creating our First Model

---

### Setup our App

1. Create a new app and specify PostrgeSQL:<br>`rails new car_app -d postgresql -T`

2. `cd car_app`

3. Create the database:<br>`rake db:create`

4. `atom .`

5. In a new Terminal tab, `rails s` then browse to `localhost:3000`

---

### Generating our Model

- Let's generate a simple model to represent car objects:<br>`rails generate model Car make:string year:integer price:integer`

- After running this command, there will be a `car.rb` file in the `models` folder that has the following code:

	```ruby
	class Car < ApplicationRecord
	end
	```
- Let's look at application_record.rb

- We will always define our models with a name that represents a singular data object, e.g. `Car`, not `Cars`.	
- Wait, there's no attributes or anything else in there.<br>**Who can tell us why and where to find them?**

---

### Migrations

- Besides the model class file, the model generator created a **migration** as well.

- A migration file contains code that `rake` runs to modify our database's structure. **What do we call the database's structure?  What file in a Rails app represents it?**

- We will find the migration we just created in the `db/migrate` folder - let's check it out...

---

### Migrations (cont.)

- Note the filename is prefaced with a timestamp so that it sorts in chronological order.

- We create migrations to modify the database over time as our application evolves.

- We'll see that a migration is a class that inherits from `ActiveRecord::Migration`. The code inside of the class is a [Ruby DSL](http://archive.oreilly.com/pub/post/what_is_a_dsl.html).

- Migrations can be generated to modify existing tables, e.g., to add/remove columns (attribute). These [docs](http://guides.rubyonrails.org/active_record_migrations.html) explain how.

---

### Database Schema

- You can check what the database schema file looks like by looking at the `db/schema.rb` file. But it doesn't exist yet because we haven't run a migration yet.

- Before we run the migration we created, let's see the command that reports the status of our migrations:<br>`rake db:migrate:status`

- You will see that the status of our create car migration is "down", that means it has not been run yet. Let's change it to "up":<br>`rake db:migrate`<br>This will run all unprocessed (down) migrations.

---


### Database Schema (cont.)

- Now that we've run a migration, there will be a `schema.rb` file.

- Look, but never touch the `schema.rb` file - consider it read-only. Our database schema must only be modified with migrations!

- The naming convention for tables is the pluralized, snake-cased version of the model class it represents.

- Besides the `make`, `year` and `price` attributes we generated, note that Rails automatically generated `created_at` and `updated_at` _datetime_ attributes for us.

- Lastly, although not shown in `schema.rb`, there will always be an `id` attribute of type _integer_ in every table/model.

---

## Creating Data with Models

---

### The Rails Console

- Before we start using models in controllers and views, let's see how we can do some CRUD in the Rails console.

- Make sure that you're in your app's folder and run:<br>`rails console`<br>or<br>`rails c` for short.

- The console will load all of our app's model classes automatically so that we can use them.

---

### Creating New Models

- There are two methods we can use to create models in our database: `new` and `create`.

- First, let's take a look at the `new` method:

```ruby
car = Car.new
car.make = "Toyota"
car.year = 2015
car.price = 25000
# the above code is same as this one line:
# car = Car.new(make: "Toyota", year: 2015, price: 25000)
```

---

### Creating New Models (cont.)

- Typing `car` will reveal that the `id` is equal to `nil`. This signifies that this is an in memory object only and has not been saved to the database yet.

- Let's save it:

	```ruby
	car.save
	```

- Looking at the console's output will show us the SQL that ActiveRecord is abstracting us from, but more importantly, the result of the `car.save` method, which should be `true`.

---

### Creating New Models (cont.)

- The process of saving in-memory data to persistent storage such as a database is known as:<br><br>

####Persistence####

---


### Creating New Models (cont.)

- If the `save` method fails, it will return `false`. This can happen for example if required data is missing or there's invalid data. This allows us to take different actions in our controllers. For example:

	```ruby
	if @car.save
		# redirect to the show view
		redirect_to car_path(@car)
	else
		# render the new view again
		render :new
	end
	```

---

### Creating New Models (cont.)

- Now let's look at the `create` method.

- Calling `create` basically is like calling `new` + `save`:

	```ruby
	car2 = Car.create(make: "Mini", year: 2016, price: 20000)
	```

- Another difference between `create` and `new` is that `create` will always return an object, which always evaluates to truthy.

- In your controllers, you can check if the model was saved successfully in the database like this:

	```ruby
	if @car.create(make: "Mini", year: 2016, price: 20000).valid?
		#successfully saved
	...
	```

---

## Quick Review

####Let's review the workflow when creating a basic Rails app with a model?


---

## Practice

1. Create another model named `Person` with these attributes:
	- `first_name` (string)
	- `last_name` (string)
	- `age` (integer)

2. Add one `Person` to the database using `new`.

3. Add another `Person` to the database using `create`.

---

## Final Questions

- **Models have a one-to-one mapping with __________ in the database.**

- **A database's schema should only be modified using __________.**

- **If we have a model class called `LineItem`, what will the table be named?**

- **Migrations are used to modify our database's schema as our application __________.**

- **What benefit does an ORM provide to developers?**

---

## References

- [ActiveRecord Basics](http://guides.rubyonrails.org/active_record_basics.html)

- [Rails Migrations](http://guides.rubyonrails.org/active_record_migrations.html)


