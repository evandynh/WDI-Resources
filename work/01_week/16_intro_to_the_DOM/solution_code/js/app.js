console.log("This is your javascript console. If you see this message, you're good to go!")

function task_one(){
	console.log("Task one: use document.getElementById to select the paragraph that says 'javascript can be hard'. Change it to 'javascript is fun!' ")
	document.getElementById('content').innerHTML = 'javascript is fun'
}
task_one()

function task_two(){
	console.log("Task two: use document.getElementsByClassName to select the title. Change the title's text to 'I LOVE JAVASCRIPT!'")
	document.getElementsByClassName('title')[0].innerHTML = 'I LOVE JAVASCRIPT!'
}
task_two()

function task_three(){
	console.log('Task three: use document.getElementsByTagName to select the body and change the color of all text on the page to yellow')
	document.getElementsByTagName('body')[0].style.color = 'yellow'
}
task_three()

function task_four(){
	console.log("Task four: use document.getElementsByTagName to select the sadface image. Change the source to this: 'https://s-media-cache-ak0.pinimg.com/564x/39/1a/e2/391ae24f5d5adc77e9a42153d1e24498.jpg'")
	document.getElementsByTagName('img')[0].src = 'https://s-media-cache-ak0.pinimg.com/564x/39/1a/e2/391ae24f5d5adc77e9a42153d1e24498.jpg'
}
task_four()

function task_five(){
	console.log("Task five: This is a tricky one. Use document.getElementsByTagName to select the body again. We want to give it a background image of this: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFvjXcHgzgTUhCFZqCQgalfYDGWlQFYpExnHgYMNaT1GO5wI27sw'")
	document.getElementsByTagName('body')[0].style.backgroundImage = "url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFvjXcHgzgTUhCFZqCQgalfYDGWlQFYpExnHgYMNaT1GO5wI27sw')"
}
task_five()

///////////// Write your own JS below!  /////////////////////

document.getElementsByClassName('face')[0].onclick = function() {
	alert('I am so happy that I can now manipulate the DOM!')
}

// document.getElementsByClassName('face')[0].addEventListener('click', function(){
// 	alert('I am so happy that I can now manipulate the DOM!')
// })






