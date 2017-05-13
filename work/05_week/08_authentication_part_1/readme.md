Slides at: [http://slides.com/iscott/ga-authentication#/](http://slides.com/iscott/ga-authentication#/)

#Authentication with Rails, Pt. I
<!-- draw the rails MVC on the board -->
##SWBAT
- Build a User model with an encrypted password
- Explain how has_secure_password and BCrypt help us create new users
- Build the rest of the MVC for a User (with routes!)

##Roadmap
Today's lesson on user authentication will be taught in two parts. The first part will deal with how to securely store an encrypted password and how to authenticate a user based on that encrypted password. We will then make a user interface for users to create an account. The second lesson will be about managing sessions (a.k.a. logging in and out). We are going to cover a HUGE AMOUNT today. The goal is not to memorize how to implement authentication in Rails. Rather, the goal is to understand conceptually how we are going to approach authentication so that when you reference this code later on, you will understand what it is doing and how it is all tied together.

##What is Authentication?

Authentication is just a fancy term used to describe how we know what person is accessing our application. It's a way to verify identity. If you say you're Dave, let's double check before we assume you are.

> **Activity (5 minutes):** Before we dive too deep into code, let's take a couple of minutes to pseudocode. Based on your experience as a user, how do websites usually check that you are who you say you are? How would you approach actually doing the checking? 

> Working in pairs, see if you can quickly pseudocode how to do a check like that.

Now that we've looked at it from a high-level, let's get into coding. We're going to walk through a simple but solid way we can use Rails to authenticate a user.

##Setup 

###Rails New!
We're going to be working on an entirely new Rails app, so let's start from scratch.

```bash
$ rails new authentication_app -T
```

###Generate our Model!
We're going to need a model that represents someone using our application. It's worth mentioning that `User` is a frequently used name for this model, but there's no magic in that word. A user is just a regular Ruby object. Rails nor Ruby has any idea what we intend to do with it. 

What attributes should our User model have?

## Our User Model
In our User model, we've got two tasks we need to take care of:

* Take a password from a user (submitted via a form), encrypt it, and then store _that_ instead of the plain text
* Check whether a user is who they say they are by comparing a plain text password submitted via a login form to our saved encrypted one

### Converting Plaintext to an Encrypted String
We want to be able to do something obvious with our user, something like:

```ruby
# user = User.new
# user.password = 'password123'
# user.password # => '$2a$10$4LEA7r4YmNHtvlAvHhsYAeZmkxeUVtMTYqwIvYY76EW5GUqDiP4.'
```

In cryptography, we'd call that unique string a _digest_. We want to store our _encrypted_ password in the database, so we're going to need to add a column to our users table called `password_digest`.


```bash
$ rails g model User name email password_digest
```

This creates an initial migration file for us. Let's take a look at it.

Before we forget, let's run that migration file and get a users table created in our database:

```bash
$ rake db:migrate
```

Let's add `has_secure_password` and basic email validation to our model:

###Model
```ruby
# app/models/user.rb
class User < ApplicationRecord
  has_secure_password
  
  # Verify that an email exists and that it does not already exist in the db
  validates :email, presence: true, uniqueness: true
end
```


Now let's take a look at our schema.



##What is Encryption?
We're used to using passwords – we use passwords on everything. What is the point of a password? It gives us a piece of information only we know.

But passwords are a sensitive thing. If we write down our password on a piece of paper next to our computer, anyone who sits down at our computer can pretend to be us. It's important that no one knows our password but us – that's why we encrypt them.

If our passwords were stored as plain text in our database, anyone looking at our database could pretend to be anyone.

Instead, we'll use encryption, converting our password to gibberish. Then, when someone sends a password to our server to try to log in, we'll convert that plain text password to gibberish and compare whether the gibberish we have stored in our database is the same as what we just converted.

##BCrypt: Our Encryption Engine of Choice
Our encryption engine of choice is called `bcrypt`. It's extremely popular, very secure, and easy to use. 

In fact, it's so commonly used with Rails that they have already added it to our Gemfile for us. We just need to uncomment it:  

```ruby
# Gemfile
gem 'bcrypt', '~> 3.1.7'
```

Whenever we modify our Gemfile, we need to download and install the new gems we added.  Here's how we do it:

```bash
$ bundle
```

BCrypt is just code that encrypts data. We need to incorporate it into our app with `has_secure_password` in the User model. This provides us with a few helper methods. The two helper methods we will use right now are....

* 1 - A method that uses BCrypt to encrypt our password so it is ready to be saved in the database
* 2 - A method that checks to see if password and password_confirmation are the same before the user is actually saved.


The first method that has_secure_password provides to us is called `password=`
It takes whatever you give it, and irreversibly encrypts it.

```ruby
def password=(word)
  self.password_digest = "$2a$10$djkCu..."
  @password = word
end

```

The second method that has_secure_password provides to us is called ```password_confirmation=```

```ruby
def password_confirmation=(word)
  @password_confirmation = word
end
```

Whenever we try and save a user object, has_secure_password compares @password and @password_confirmation. If they are the same, then the user is saved into the database.

Let's create a user in the rails console using these methods!

As for encrypting and saving that value to the database, that's it. When you save an instance of a User model, you'll have an encrypted password in the database.

##Authenticating
We've got users. We've got safe, _encrypted_ passwords – something that only the user will know. We have the data we need to know if a user is who they say they are – we just need a tool to do the checking.

`has_secure_password` to the rescue again!

`has_secure_password` provides us with another method, called "authenticate". We call this on the user object, passing in whatever they claim their password to be.

This "authenticate" method encrypts the given password and compares it to the version stored in the database. If they are not the same, "false" is returned to us. If they _are_ the same, we get the user object returned to us from the database.

This is how we use the "authenticate" method with a user object we have previously assigned to the variable "user1":

```bash
user1.authenticate("some_guess")
# => false

user1.authenticate("secret")
# => #<User id: 1, name: "Kate", email: "kate@cats.com", created_at: "2015-04-14 19:04:26", updated_at: "2015-04-14 19:04:26", password_digest: "$2a$10$nuEE3jYRhrXfhg9dP7jbAuyOoYLZIuAumNn00WZqhYr...">
```

Believe it or not, that's it. Now you can look up a user, and check whether a password they've given you is _their_ password.

- - -

Spend 5 minutes in groups and discuss the following:

- Why is it important to have password_digests instead of storing passwords as text?
- What does the `password=` method do?
- What does the `password_confirmation=` method do?
- What does the `authenticate` method do?
- How do we get access to these useful methods? i.e. what lines of code do we need to add to our app?

- - -
Finally, we need to create a user interface for a user to sign-up. 

And just like all our other Rails applications, we only need to build a few things:

- **Routes**
- **Model**
- **View**
- **Controller**

We've already got our model, so that's one down.

We want to list all users, and be able to create a new user.

Out of the 7 standard controller actions, which ones will we need?

<br>
Let's start with our routes:

```ruby
# config/routes.rb
  get 'users' => 'users#index'
  get 'users/new' => 'users#new', as: :new_user
  post 'users' => 'users#create'
```

With our routes out of the way, let's build our Users Controller.

###Controller
Let's generate a controller:

```bash
$ rails g controller users
```

Open up your new ``UsersController``, and we'll add our ``index``, ``new``, and ``create`` actions.  We've done this with a lot of controllers, so let's just fill it out like we normally would, with common Rails conventions. Don't forget our params method!

```ruby
# app/controllers/users_controller.rb
class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = "You have successfully signed up!"
      redirect_to users_path
    else
      flash.now.alert = 'Invalid login credentials - try again!'
      render :new
    end
  end

private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end

```

Notice that we're permitting the params called `:password` and `:password_confirmation`
-the password gets encrypted and saved after it gets to the server.

###Views
We've only got two views to make – our `index` and our `new`.

Our index has nothing to do with signing up, it's just so we have something to look at and know creating a user instance worked. Let's quickly list out the users in our database. 

```html
<!-- app/views/users/index.html.erb -->
<h1>Users</h1>
<ul>
  <% @users.each do |user| %>
    <li><%= user.name %></li>
  <% end %>
</ul>
```


Super. Last up are our views!

Just to make sure that works, let's spin up our Rails server and cruise over to `localhost:3000/users`. Did it work? Heck yes it did--boom!

Now, the fun part – our sign up page. Remember, this is nothing more than a form to create a new instance of our User model.

```html
<!-- app/views/users/new.html.erb -->
<h1>Sign Up</h1>
<%= form_for @user do |f| %>
  <div>
    <%= f.label :name %>
    <%= f.text_field :name %>
  </div>
  <div>
    <%= f.label :email %>
    <%= f.text_field :email %>
  </div>

  <div>
    <%= f.label :password %>
    <%= f.password_field :password %>
  </div>
  <div>
    <%= f.label :password_confirmation %>
    <%= f.password_field :password_confirmation %>
  </div>
  <div>
    <%= f.submit %>
  </div>
<% end %>
```

You might not have encountered that ``password_field`` before – it's just like a ``text_field``, but it hides what you're typing. You know, for security 😉

Add a user in the browser!

Now, because of that awesome setup we built where `password` gets encrypted and not saved, if you check out your database, you'll notice we just made a new user, with a securely encrypted password.

**And that's all signing up is.**

## Wrapping Up
At its heart, all we've done is take advantage of some cool things that `has_secure_password` gave to us:

* The `password=` method, that mainly takes a string and uses BCrypt to convert it into a crazy password_digest. It also takes the string and sets it equal to @password.
* The `password_confirmation=` method that simply takes a string and sets it equal to an instance variable called @password_confirmation.
* The validations that are run when you try and save the user. The most important of which is checking that `@password` and `@password_confirmation` are the same.
* The `authenticate` method, that takes a string, encrypts it, and compares the encrypted version to what is stored in the database. 


It's easy to feel like users and logging in are _magic_, and they're really not. Authentication is just a matter of finding a way to _not_ store a plaintext password, but still be able to check it when we need to.

In **Part II** of this lesson, we'll talk about what to do once we've got a user authenticated – aka _keeping them logged in!_


[Here's a video about cookies](https://www.youtube.com/watch?v=I01XMRo2ESg).