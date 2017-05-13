var Todo = require('../models/todo')

module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy
}

function index(req, res) {
  Todo.find({}, function(err, todos) {
    if (err) throw err
    res.json(todos)
  })
}

function create(req, res) {
  var newTodo = new Todo(req.body)
  newTodo.save(function(err, savedTodo) {
    if (err) throw err
    res.json(savedTodo)
  })
}

function update(req, res) {
  var id = req.params.id

  Todo.findById(id, function(err, todo) {
    if (err || !todo) throw err

    todo.completed = !todo.completed

    todo.save(function(err, updatedTodo) {
      if (err) throw err

      res.json(updatedTodo)
    })
  })
}

function destroy(req, res) {
  var id = req.params.id

  Todo.remove({_id: id}, function(err) {
    if (err) throw err

    res.json({message: 'Just let that todo chill, baby!'})
  })
}
