console.log('connected!')

var userChoice = prompt('What is your move?').toLowerCase()
console.log('You chose: ' + userChoice)

if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
  var computerChoice = Math.random()
  if (computerChoice < 0.34) {
    computerChoice = 'rock'
  } else if(computerChoice <= 0.67) {
    computerChoice = 'paper'
  } else {
    computerChoice = 'scissors'
  }
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
    if (choice2 === 'scissors') {
      message = 'rock wins - congratulations!'
    } else {
      message = 'paper wins - rematch?'
    }
  } else if (choice1 === 'paper') {
    if (choice2 === 'rock') {
      message = 'paper wins - congratulations!'
    } else {
      message = 'scissors wins - rematch?'
    }
  } else if (choice1 === 'scissors') {
    if (choice2 === 'rock') {
      message = 'rock wins - rematch?'
    } else {
      message = 'scissors wins - congratulations!'
    }
  }
  console.log(message)
}

