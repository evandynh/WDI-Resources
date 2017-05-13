console.log('Connection established!')

//////////////////////////////////
//           PART 1             //
//////////////////////////////////

// Make a deck of cards.

// 1. Make an array of suits.
var suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds']

// 2. Make an array of values.
var vals = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

// 3. Write a constructor function for Card which takes two arguments, suit and val. Include a stateValue method to return the card's suit and value in a concatenated string.
var Card = function(suit, val) {
  this.suit = suit
  this.val = val
  this.stateValue = function(){
    return 'The ' + this.val + ' of ' + this.suit + '.'
  }
}

// Alternatively, you could not include stateValue in the constructor function, and instead add it as a property to the Card prototype object:
// Card.prototype.stateValue = function(){
//   return 'Card is a ' + this.val + ' of ' + this.suit + '.'
// }

// 4. Using iteration, build a deck of cards.
var deck = []

for(var i = 0; i < vals.length; i++){
  for(var j = 0; j < suits.length; j++){
    var card = new Card(suits[j], vals[i])
    deck.push(card)
  }
}

// 5. Add an event listener to console.log the deck object and the deck length when a specific button is clicked (don't forget to create the button in your HTML!)
document.getElementById('showDeck').addEventListener('click', function() {
  console.log(deck)
  console.log(deck.length)
})

//////////////////////////////////
//           PART 2             //
//////////////////////////////////

// Make a list of animals in a shelter.

// 1. Make a constructor function for animals that takes name, species, breed, and available as arguments.
var Animal = function(name, species, breed, available){
  this.name = name
  this.species = species
  this.breed = breed
  this.available = available
}

// 2. Make three animals and save them each to variables.
var spot = new Animal('Spot', 'dog', 'terrier', true)
var fluffy = new Animal('Fluffy', 'cat', 'DSH', true)
var socks = new Animal('Socks', 'cat', 'DSH', false)

// 3. Make an object to represent the shelter. Give it a name, location, and an empty list of animals.
var shelter1 = {
  name: 'Los Angeles Animal Shelter',
  location: 'Los Angeles',
  animals: []
}

// 4. Add the animals that you made in step 2 to the shelter that you made in step 3.
shelter1.animals.push(spot, fluffy, socks)

// 5. Add an event listener to console.log the shelter object when a specific button is clicked (don't forget to create the button in your HTML!)
document.getElementById('showShelter1').addEventListener('click', function() {
  console.log('shelter from part 2:')
  console.log(shelter1)
})


//////////////////////////////////
//           PART 3             //
//////////////////////////////////

// Make a list of animals in a shelter again, but this time, use prototypes.

// 1. Make a constructor function for animals that takes no arguments. Its only property is an identify function which returns a string stating its name and species.
var Animal = function(){
  this.identify = function() {
    return "Hi! I'm " + this.name + " and I'm a " + this.species + "."
  }
}

// 2. Make a Cat prototype which inherits from Animal. The constructor function should take three arguments: name, available, and breed.
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat
function Cat(name, available, breed) {
  this.name = name
  this.species = 'cat'
  this.breed = 'DSH' || breed
  this.available = available
}

// 3. Repeat step 2 for Dog.
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog
function Dog(name, available, breed) {
  this.name = name
  this.species = 'dog'
  this.breed = breed
  this.available = available
}

// 4. Make three animals using the Cat and Dog constructors and save them each to variables.
var spot = new Dog('Spot', true, 'terrier')
var fluffy = new Cat('Fluffy', true)
var socks = new Cat('Socks', false)

// 5. Make an object to represent the shelter. Give it a name, location, and an empty list of animals.
var shelter2 = {
  name: 'Los Angeles Animal Shelter',
  location: 'Los Angeles',
  animals: []
}

// 6. Add the animals that you made in step 4 to the shelter that you made in step 5.
shelter2.animals.push(spot, fluffy, socks)

// 7. Add an event listener to console.log the shelter object when a specific button is clicked (don't forget to create the button in your HTML!)
document.getElementById('showShelter2').addEventListener('click', function() {
  console.log('shelter from part 3:')
  console.log(shelter2)
})

