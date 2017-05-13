console.log("script linked!")

//////////////////////////////
//					STEP 1					//
//////////////////////////////
var mom = {}
var dad = {}

console.log('mom object after step 1:', mom)
console.log('dad object after step 1:', dad)

//////////////////////////////
//					STEP 2					//
//////////////////////////////
mom.personality = {}
dad.personality = {}

console.log('mom object after step 2:', mom)
console.log('dad object after step 2:', dad)

//////////////////////////////
//					STEP 3					//
//////////////////////////////
//mom physicality
mom.physicality = {}
mom.physicality.heightInInches = 70
mom.physicality.description = 'tall'
mom.physicality.features = {
	eyeColor: 'blue',
	hairColor: 'blond'
}
mom.physicality.extraLimbs = null //could be an array
mom.physicality.isHuman = true

//dad physicality
dad.physicality = {}
dad.physicality.heightInInches = 68
dad.physicality.description = 'average'
dad.physicality.features = {
	eyeColor: 'brown',
	hairColor: 'brown'
}
dad.physicality.extraLimbs = null //could be an array
dad.physicality.isHuman = true

console.log('mom object after step 3:', mom)
console.log('dad object after step 3:', dad)

//////////////////////////////
//					STEP 4					//
//////////////////////////////
//mom personality
mom.personality.awesomenessLevel = 100
mom.personality.senseOfHumor = 'sarcastic'
mom.personality.favoriteActivities = ['reading', 'going to the beach', 'watching Law & Order reruns']
mom.personality.criminalTendencies = null
mom.personality.caring = true

//dad personality
dad.personality.awesomenessLevel = 100
dad.personality.senseOfHumor = 'dad jokes style'
dad.personality.favoriteActivities = ['basketball', 'learning about new technology', 'watching Law & Order reruns']
dad.personality.criminalTendencies = null
dad.personality.caring = true

console.log('mom object after step 4:', mom)
console.log('dad object after step 4:', dad)

//////////////////////////////
//					STEP 5					//
//////////////////////////////
var me = {}

//personality
me.personality = {}
me.personality.awesomenessLevel = (dad.personality.awesomenessLevel + mom.personality.awesomenessLevel) / 2
me.personality.senseOfHumor = mom.personality.senseOfHumor
me.personality.favoriteActivities = [mom.personality.favoriteActivities[0], dad.personality.favoriteActivities[1], mom.personality.favoriteActivities[2]]
me.personality.criminalTendencies = dad.personality.criminalTendencies
me.personality.caring = mom.personality.caring || dad.personality.caring

//physicality
me.physicality = {}
me.physicality.heightInInches = (dad.physicality.heightInInches + mom.physicality.heightInInches) / 2
me.physicality.description = mom.physicality.description
me.physicality.features = {
	eyeColor: dad.physicality.features.eyeColor,
	hairColor: dad.physicality.features.hairColor
}
me.physicality.extraLimbs = dad.physicality.extraLimbs
me.physicality.isHuman = dad.physicality.isHuman && mom.physicality.isHuman

console.log('me object after step 5:', me)

//////////////////////////////
//					STEP 6					//
//////////////////////////////
me.skills = {
	goodAt: ['writing comedy', 'writing code', 'being awesome', 'listening'],
	badAt: 	['speaking French', 'being a cat', 'back flips', 'surfing']
}

console.log('me object after step 6:', me)

//////////////////////////////
//					STEP 7					//
//////////////////////////////
me.age = 29
me.age++

console.log('me object after step 7:', me)

//////////////////////////////
//					STEP 8					//
//////////////////////////////
me.skills.goodAt.splice(me.skills.goodAt.length/2)

console.log('me object after step 8:', me)

//////////////////////////////
//					STEP 9					//
//////////////////////////////
me.age++

console.log('me object after step 9:', me)

//////////////////////////////
//					STEP 10					//
//////////////////////////////
me.skills.goodAt = ['sitting']

console.log('me object after step 10:', me)

//////////////////////////////
//					STEP 11					//
//////////////////////////////
me.skills.badAt.push('DJing', 'doing taxes', 'reading minds', 'opening sliding doors', 'flying')

console.log('me object after step 11:', me)

//////////////////////////////
//					BONUS						//
//////////////////////////////
me.speak = function() {
	if (arguments.length) {
		console.log('Oh, hay!')
	} else {
		console.log('Get it together, me!')
	}
}

console.log('me.speak with no arguments:')
me.speak()

console.log('me.speak with one argument:')
me.speak("arrrrggg")
