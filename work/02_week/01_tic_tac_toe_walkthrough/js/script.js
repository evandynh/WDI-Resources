////////// GLOBAL VARIABLES //////////

var boxes = document.getElementsByClassName('box')

var turn = 1

var player1 = {
  token: 'x',
  score: 0,
  scoreBoard: document.getElementById('p1score')
}

var player2 = {
  token: 'o',
  score: 0,
  scoreBoard: document.getElementById('p2score')
}

var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

////////// HAPPENS IMMEDIATELY //////////

document.getElementById('resetBoard').addEventListener('click', clearBoard)

document.getElementById('resetScores').addEventListener('click', function(){
  player1.score = 0
  player1.scoreBoard.innerHTML = player1.score
  player2.score = 0
  player2.scoreBoard.innerHTML = player2.score
})

addListeners()

////////// FUNCTIONS //////////

function addListeners() {
  for(var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', clickable)
    boxes[i].className += ' available'
    var turnAnnounce = takeTurns()
    document.getElementById('announce').innerHTML = turnAnnounce + "'s turn'"
  }
}

function clearBoard() {
  for(var i = 0; i < boxes.length; i++) {
    boxes[i].className = 'box'
  }
  document.getElementById('announce').innerHTML = ''
  addListeners()
}

function clickable(){
  if(this.className === 'box available') {
    var choice = takeTurns()
    this.className = 'box ' + choice
    turn++
    var turnAnnounce = takeTurns()
    document.getElementById('announce').innerHTML = turnAnnounce + "'s turn'"
    getWinner(choice)
  } else {
    alert('That cell is taken!')
  }
}

function endGame(player) {
  document.getElementById('announce').innerHTML = player.token + ' wins!'
  player.score++
  player.scoreBoard.innerHTML = player.score
  removeListeners()
}

function getWinner(token) {
  for (var i = 0; i < winningCombos.length; i++) {
    if(boxes[winningCombos[i][0]].classList[1] === token && boxes[winningCombos[i][1]].classList[1] === token && boxes[winningCombos[i][2]].classList[1] === token) {
      if (token === player1.token) {
        endGame(player1)
        return
      } else if (token === player2.token) {
        endGame(player2)
        return
      }
    }
  }
  // check for tie
  var cellEmpty = false
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].classList[1] === 'available') {
      cellEmpty = true
    }
  }
  if (!cellEmpty) {
    document.getElementById('announce').innerHTML = 'It is a tie!'
  }
}

function removeListeners() {
  for(var i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener('click', clickable)
    if(boxes[i].classList[1] === 'available') {
      boxes[i].className = 'box'
    }
  }
}

function takeTurns() {
  // alternate between X and O
  // turn++
  return (turn % 2 ? 'x' : 'o')

  // if (turn % 2) {
  //   return 'X'
  // } else {
  //   return 'O'
  // }
}
