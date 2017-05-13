var User = require('../models/user.js')

//create action to display all users
function index(req, res) {
	User.find({}, function(err, users){
		if (err) throw err
		res.json(users)
	})
}

//create action to add a new user
function create(req, res, next) {
	var user = new User()
	user.name = req.body.name
	user.email = req.body.email
	user.age = req.body.age

	user.save(function(err, user, count) {
		if (err) throw err
		res.json({success: true, message: 'Welcome!'})
	})
}

//create action to show a single user
function show(req, res) {
	User.find({email: req.params.email}, function(err, user){
		if (err) throw err
		res.json(user)
	})
}

//create action to edit a single user
function update(req, res) {
	User.findOneAndUpdate({email: req.params.email}, {name: req.body.name}, function(err, user) {
		if (err) throw err
		res.json(user)
	})
}

//create action to delete a single user
function destroy(req, res) {
	User.remove({email: req.params.email}, function(err){
		if (err) throw err
		res.json({success: true, message: 'BYE, FELICIA!'})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}
