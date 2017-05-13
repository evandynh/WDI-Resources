var Todo = require('../models/todo')

module.exports = {
  home:  home,
  about: about,
  todos: todos
}

function home(req, res) {
  res.render('pages/home')
}

function about(req, res) {
  Todo.find({}, function(err, todos) {
    if (err) throw err
    res.render('pages/about', {numberOfTodos: todos.length})
  })
}

function todos(req, res) {
  res.render('pages/todos')
}
