console.log('app.js loaded')

// Declare global variables
var $personalTodo
var $bootsyTodo
var $form
var $todoTask
var $todoBootsyLevel

function createTodoHTML(todo) {
  return $(`<li id="todo-${todo._id}" class="todo-item bootsy${todo.bootsyLevel}">${todo.task} <button class="delBtn"> </button></li>`).draggable({
    snap: 'ul',
    stop: updateHandler
  })
}

function updateHandler() {
  var html = $(this)

  var id = html.attr('id').slice(5)

  $.ajax({
    type: 'PATCH',
    url: '/api/todos/' + encodeURIComponent(id),
    data: {}
  }).then(
    function(jsonTodo) {
      // Remove the old li for this todo
      html.remove()

      var todoHTML = createTodoHTML(jsonTodo)

      if(jsonTodo.completed) {
        $personalTodo.append(todoHTML)
      } else {
        $bootsyTodo.append(todoHTML)
      }
    }
  )
}

function deleteHandler() {
  var html = $(this).parent()

  var id = html.attr('id').slice(5)

  $.ajax({
    type: 'DELETE',
    url: '/api/todos/' + id
  }).then(
    function() {
      html.remove()
    }
  )
}

$(document).ready(function() {
  // Grab all the needed DOM elements using jQuery
  $personalTodo = $('#personal-todo').droppable()
  $bootsyTodo = $('#bootsy-todo').droppable()
  $form = $('#new-todo')
  $todoTask = $('#todo-task')
  $todoBootsyLevel = $('#todo-bootsy-level')

  // Grab all todos from our db
  $.ajax({
    type: 'GET',
    url: '/api/todos'
  }).then(
    function(jsonTodos) {
      // Iterate through the array of jsonTodos
      jsonTodos.forEach(function(jsonTodo) {
        // Create the todo LI
        var todoHTML = createTodoHTML(jsonTodo)
        // Check if it's completed and append it to the correct list
        if (jsonTodo.completed) {
          $personalTodo.append(todoHTML)
        } else {
          $bootsyTodo.append(todoHTML)
        }
      })
    }
  )

  $form.on('submit', function(e) {
    // Stop the default behavior
    e.preventDefault()

    // capture form data in a variable
    var newTodo = {
      task: $todoTask.val(),
      bootsyLevel: $todoBootsyLevel.val()
    }

    // Use AJAX to add the new todo to your db
    $.ajax({
      method: 'POST',
      url: '/api/todos',
      data: newTodo
    }).then(
      function(jsonTodo) {
        console.log('Success:', jsonTodo)

        // Clear out the form
        $todoTask.val('')
        $todoBootsyLevel.val('')

        return jsonTodo
      },
      function(err) {
        console.log('Failed:', err)
      }
    ).then(
      function(jsonTodo) {
        var todoHTML = createTodoHTML(jsonTodo)
        $bootsyTodo.append(todoHTML)
      }
    )
  })

  $personalTodo.on('click', '.delBtn', deleteHandler)
  $bootsyTodo.on('click', '.delBtn', deleteHandler)
})
