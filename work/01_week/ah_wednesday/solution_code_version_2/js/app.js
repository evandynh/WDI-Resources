console.log('connected!')

var userChoice = prompt('What is your move?').toLowerCase()
console.log('You chose: ' + userChoice)

if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
  var options = ['rock', 'paper', 'scissors']
  var computerChoice = options[Math.floor(Math.random() * options.length)]

  console.log('Computer chose: ' + computerChoice)
  compare(userChoice, computerChoice)
} else {
  console.log('That is not a valid move!')
}

function compare(choice1, choice2){
  var message
  if (choice1 === choice2) {
    message = 'The result is a tie!'
  } else if (choice1 === 'rock') {
    message = (choice2 === 'scissors' ? 'rock wins - congratulations!' : 'paper wins - rematch?')
  } else if (choice1 === 'paper') {
    message = (choice2 === 'rock' ? 'paper wins - congratulations!' : 'scissors wins - rematch?')
  } else if (choice1 === 'scissors') {
    message = (choice2 === 'paper' ? 'scissors wins - congratulations!' : 'rock wins - rematch?')
  }
  console.log(message)
}

