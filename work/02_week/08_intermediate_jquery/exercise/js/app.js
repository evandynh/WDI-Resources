console.log('READY!!!')

$('#myBtn').on('click', function(){
  alert('You clicked me!')
})

$('#container').on('click', function(){
  alert('You clicked the container div!')
})

$('#innerContainer').on('click', function(){
  event.stopPropagation()
  alert('You clicked the inner container div!')
})

// $('#drinks').append('<li id="drink1"></li>', '<li id="drink2"></li>', '<li id="drink3"></li>')
// $('#drink1').html('sprite')
// $('#drink2').html('coke')
// $('#drink3').html('gatorade')
//
// $('#foods').append('<h3>Foods</h3> <li>Pizza</li> <li>Tacos</li> <li>Chicken Wings</li> <li>Salmon</li>')

// $('.foodsAndDrinks #drinks').html('<li class="soda">Orange</li><li class="soda">Coca Cola</li>')
//
// $('.foodsAndDrinks #foods').html('<li class="Chicken">Honey Chicken</li><li class="Chicken">BBQ Chicken</li>')

var drinksArray = ['Coca-Cola', 'Pepsi Cola', 'Dr. Pepper']

for(var i = 0; i < drinksArray.length; i++){
  $('#drinks').append('<li>' + drinksArray[i] + '</li>')
}

var foodsArray = ['hamburger', 'hot dog', 'pizza']

foodsArray.forEach(function(food){
  $('#foods').append('<li>' + food + '</li>')
})

// $('#addFood').on('click', function(){
//   var newFood = $('#foodInput').val()
//   $('<li />', {html: newFood}).appendTo('ul#foods')
//   $('#foodInput').val('')
// })

$('#addFood').on('click', function(){
  var newFood = $('#foodInput').val()
  $('#foods').append('<li>' + newFood + '</li>')
  $('#foodInput').val('')
})

$('#addDrink').on('click', function(){
  var newDrink = $('#drinkInput').val()
  $('#drinks').append('<li>' + newDrink + '</li>')
  $('#drinkInput').val('')
})

// document.getElementsByClassName('innerItem')[1].addEventListener('click', function(){
//   this.classList.add('red')
// })

// $('.innerItem').last().click(function(){
//   $(this).toggleClass('red')
// })
