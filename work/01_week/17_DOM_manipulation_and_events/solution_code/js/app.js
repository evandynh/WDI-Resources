console.log('Connected!')

// All of my images

var kitten = 'https://www.hirerush.com/blog/wp-content/uploads/2016/02/playful-kitten-6683.jpg'

var puppy = 'http://www.pawderosa.com/images/puppies.jpg'

var cat = 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx'

var dog = 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-medium-landing-hero.ashx'

var unicorn = 'https://s-media-cache-ak0.pinimg.com/originals/e3/ab/d2/e3abd2c3b64151e4c1dfe59e5a2227dc.jpg'

var cats = 'http://brightmags.com/wp-content/uploads/2015/06/cats.jpg'

var queen = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqgM6oM5Yr21KVuoVVGW4RazIZZDXkrp1dXV0iabbVRA02xP3j'

var kake = 'https://herschelian.files.wordpress.com/2012/06/2candlebdaycake.png'

// All of my event listeners

document.getElementById('button1').addEventListener('click', function(){
  alert('Hello!')
})

document.getElementById('kittenOrPuppy').addEventListener('click', function(){
  // if(this.src === kitten) {
  //   this.src = puppy
  // } else {
  //   this.src = kitten
  // }
  this.src = (this.src === kitten ? puppy : kitten)
})

// Individual event listeners to change background image
// document.getElementById('cat').addEventListener('click', function(){
//   document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + cat + ')'
// })

// document.getElementById('dog').addEventListener('click', function(){
//   document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + dog + ')'
// })

// document.getElementById('unicorn').addEventListener('click', function(){
//   document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + unicorn + ')'
// })

// Looping through buttons to change background image
var backgroundChoices = document.getElementsByClassName('backgroundChoice')

for (var i = 0; i < backgroundChoices.length; i++) {
  backgroundChoices[i].addEventListener('click', function(){
    var newBackground;
    if(this.id === 'cat'){
      newBackground = cat
    } else if (this.id === 'dog') {
      newBackground = dog
    } else {
      newBackground = unicorn
    }
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + newBackground + ')'
  })
}

var favThings = document.getElementsByClassName('favThings')

var picture = document.getElementById('picture')

for (var i = 0; i < favThings.length; i++) {
  favThings[i].addEventListener('mouseover', function(){
    this.style.color = 'pink'
  })
  favThings[i].addEventListener('mouseout', function(){
    this.style.color = 'black'
  })
  favThings[i].addEventListener('click', function(){
    var item = this.innerHTML.toLowerCase()
    if (item === 'cats') {
      picture.src = cats
    } else if (item === 'queen') {
      picture.src = queen
    } else if (item === 'kake') {
      picture.src = kake
    }
  })
}

document.getElementById('once').addEventListener('click', handler);

// handler function
function handler(e) {
	// remove this handler
	e.target.removeEventListener(e.type, arguments.callee);

	alert("That's it!");
}

document.getElementById('submitName').addEventListener('click', function(){
  var name = document.getElementById('inputField').value
  document.getElementById('greeting').innerHTML = 'Hi, ' + name
  document.getElementById('inputField').value = ''
})

document.getElementsByTagName('p')[0].addEventListener('click', function(){
  this.style.color = 'blue'
})

document.getElementsByTagName('a')[0].addEventListener('click', function(e){
  this.style.color = 'green'
  // makes it so the p tag event listener doesn't fire
  e.stopPropagation()
})
