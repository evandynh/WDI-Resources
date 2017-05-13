// Our database file needs access to the environment variables, but this file is run outside of our app.  So we must require dotenv seperately.
require('dotenv').config()

var mongoose = require('./database'),
    Todo = require('../models/todo')

var todos = [
  {
    task: "Refer to yourself by your bootsified name.",
    bootsyLevel: 3,
    completed: false
  },
  {
    task: "Wear star-shaped glasses",
    bootsyLevel: 1,
    completed: true
  },
  {
    task: "Create a bootsyfied name for yourself and try it out",
    bootsyLevel: 2,
    completed: false
  }
]

Todo.remove({}, function(err) {
  if (err) throw (err)
  Todo.create(todos, function(err, todos) {
    if (err) throw (err)
    console.log('Database seeded with ' + todos.length + ' todos')
    mongoose.connection.close()
    process.exit()
  })
})
