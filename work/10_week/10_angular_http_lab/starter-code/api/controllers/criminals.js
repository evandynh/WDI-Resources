var Criminal = require('../models/Criminal')

// GET /api/criminals
function index(request, response) {
  Criminal.find({}, function(error, criminals) {
    if(error) response.json({message: 'Could not find any criminal'})

    response.json({criminals: criminals})
  }).select('-__v')
}

// POST /api/criminals
function create(request, response) {
  console.log('in POST')
  console.log('body:',request.body)

  var criminal = new Criminal(request.body)

  criminal.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate criminal b/c:' + error})

    response.json({criminal: criminal})
  })
}

// GET /api/criminals/:id
function show(request, response) {
  var id = request.params.id

  Criminal.findById({_id: id}, function(error, criminal) {
    if(error) response.json({message: 'Could not find criminal b/c:' + error})

    response.json({criminal: criminal})
  }).select('-__v')
}

// PATCH /api/criminals/:id
function update(request, response) {
  console.log('in PATCH')
  console.log('body:',request.body)

  var id = request.params.id

  Criminal.findById({_id: id}, function(error, criminal) {
    if(error) response.json({message: 'Could not find criminal b/c:' + error})

    if(request.body.name) criminal.name = request.body.name
    if(request.body.location) criminal.location = request.body.location
    if(request.body.status) criminal.status = request.body.status

    criminal.save(function(error) {
      if(error) response.json({messsage: 'Could not update criminal b/c:' + error})

      response.json({message: 'Criminal successfully updated', criminal: criminal})
    })
  }).select('-__v')
}

// DELETE /api/criminals/:id
function destroy(request, response) {
  var id = request.params.id

  Criminal.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete criminal b/c:' + error})

    response.json({message: 'Criminal successfully deleted'})
  }).select('-__v')
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
