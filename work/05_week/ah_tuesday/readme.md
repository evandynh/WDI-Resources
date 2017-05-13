# Make a Twitter clone... kind of
###(Just the tweets)

---

## Introduction


We've covered some of the basics of Ruby on Rails, but coding is about practice.

In this lab, you will create a new rails app applying the concepts we've covered so far:

- Adding a model
- Adding a controller
- Adding routes that map to controller actions. 

Although this lab is not about CSS, it's always better to have a nice looking app!

The application is going to be called `rails_twitter`.

## Exercise

#### Requirements

- Create a new Rails app called `rails_twitter` with `rails new` that uses PostgreSQL as the database and skips testing:<br>`? rails new rails_twitter -d postgresql -T`

- `rails_twitter` is going to be a full-CRUD app, capable of displaying, creating, updating and deleting tweets.

- Since our app is a CRUD app, we're going to need to generate a model - `Tweet`.

- Generate a controller, naming it using Rails' convention for naming controllers for resources.

- Define all 7 RESTful routes for the Tweet model.

- Define all necessary actions in the controller and write the code necessary to provide CRUD functionality.

- Write HTML & erb code as necessary in each view file to display the desired HTML/UI (show one tweet, list all tweets, enter a new tweet and update a tweet).

- Ensure that there are links providing navigation from page to page. You decide what makes sense for this app of yours.

**Bonus:**

- Add a static `welcome` view.

- Code a delete "confirmation" message before allowing a tweet to be deleted.

#### Deliverable

Here's some inspiration for what your Rails app could look like:

![Rails app screenshot](https://cloud.githubusercontent.com/assets/402501/8434920/5aeca6ac-1f46-11e5-901f-94ccb3659888.png)

## Additional Resources

- Check the [Rails Guides](http://guides.rubyonrails.org/)

- More details about routing [Routing](http://guides.rubyonrails.org/routing.html)

## Finishing steps:

* Find 3 friends and do one of these:

<img src="https://admin.mashable.com/wp-content//uploads/2013/07/Anchorman.gif" width="950px">

* Congratulations! You've completed the exercise.