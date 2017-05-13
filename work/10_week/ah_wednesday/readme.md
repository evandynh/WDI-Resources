> There's much to do!

# The Double Double

![Double Double](./double-double.jpg)

Practice building out a RESTful backend API and consume it with a separate Angular front end.

![Candle](http://25.media.tumblr.com/a8d5852f900b9b8ef58cf152df399db0/tumblr_mx8qywYLJ01qzxh6go1_400.gif)

We're gonna burn this candle at both ends!

# Setup

Make a new git repo and commit after each step. Later, you can use your commit history to help you remember your process!

# First! Build out a back-end.

To the back, to the back!

## Getting Started

- Create a JSON API that runs on `localhost:3000`
- Use mongoose and mongodb to persist data
- Use Postman to check that all your API endpoints work as expected.

Your API should expose the following routes:

```
POST /api/todos       | create a new todo
GET /api/todos        | return all todos
GET /api/todos/:id    | return a single todo
PATCH /api/todos/:id  | update a single todo
DELETE /api/todos/:id | destroy a single todo
```

All Todos created and returned should have a few fields. Here are some suggestions:

```
title       | String
priority    | Number (1 to 3)
difficulty  | Number (1 to 3)
isComplete  | boolean
createdAt   | date
updatedAt   | date
completedOn | date
```

Are you sure your backend is set-up properly? Did you test everything in Postman like you were supposed to? Nothing is worse than spending an hour trying to figure out why your Angular app is not behaving as expected and then realizing it was your backend that was the problem all along.

# Then! Build out a client.

To the front, to the front!

## Getting Started

- In another directory, create a separate AngularJS project

Your client-side app should use `$http` to

- get todos from the Todos JSON API
- create a new todo for the Todos JSON API
- update a todo from the Todos JSON API
- destroy a todo from the Todos JSON API

## Tips

- Your express app and your client-side app should be in two separate directories!
- You can build something other than a todos app if you want, but follow these same steps. Make sure to keep it simple and build your API with only one resource for now.