// Add a new doughnut to the list with style and flavor
var doughnut = {
	style: "Cake",
	flavor: "Chocolate-iced"
}

$.post('https://wsmd-backend.herokuapp.com/api/doughnuts', doughnut)
.done(function(data){
	console.log("Doughnut was added")
})

// Again, using $.ajax
$.ajax({
  url: 'https://wsmd-backend.herokuapp.com/api/doughnuts',
  method: 'post',
  dataType: 'json',
  data: {style: "Cake", flavor: "peach"}
}).done(function(data){
  console.log("Doughnut created")
  console.log(data)
})

// Get a single doughnut and spit out the JSON collection in the console
var ajax = $.get('https://wsmd-backend.herokuapp.com/api/doughnuts/582b98385e41a200045776a3')
	.done(function(data){
	console.log(data)
})

// Use the more generic $.ajax to do the same request
$.ajax({
	url: 'https://wsmd-backend.herokuapp.com/api/doughnuts/582b98385e41a200045776a3',
	method: 'get', // GET by default
	dataType: 'json' // Intelligent Guess by default (xml, json, script, or html)
}).done(function(data){
	console.log(data)
})
// type: is an alias for method.
// You should use type if you're using versions of jQuery prior to 1.9.0.

// Modify that doughnut by changing its flavor
$.ajax({
	url: 'https://wsmd-backend.herokuapp.com/api/doughnuts/582b98385e41a200045776a3',
	type: 'PATCH',
	dataType: 'json',
	data: {style: "Old Fashioned", flavor: "Strawberry"},
}).done(function(data){
	console.log(data)
})
