// IIFE
(function(){
	'use strict'

	angular.module('kittiesApp')
		.controller('KittiesController', KittiesController)

		function KittiesController(){
		// We're naming this controller KittiesController, which we can see in that first argument above. We are allowed to have many controllers if we want to, and can bind them to different parts of our view.

			var self = this // We refer to this as a capture variable. The capture variable ensures that when you reference 'self' it's always referencing the KittiesController.

			self.kittiesList = [ // an array of objects, each with 5 properties
			{
				catName: 'Karl', // for display in the ng-repeat with {{kitty.catName}}
				monthsOld: 5,  // for display in the ng-repeat with {{kitty.monthsOld}}
				gender: 'boy',  // for display in the ng-repeat with {{kitty.gender}}
				image: 'images/carl.png', // path to the kitten's image, displayed in the ng-repeat with <img x-ng-src={{kitty.image}}>
				adopted: true // boolean to separate adopted and available kittens via filter
			},
			{
				catName: 'Jack',
				monthsOld: 4,
				gender: 'boy',
				image: 'images/jack.png',
				adopted: false
			},
			{
				catName: 'Oscar',
				monthsOld: 2,
				gender: 'boy',
				image: 'images/oscar.png',
				adopted: false
			},
			{
				catName: 'Princess Mew',
				monthsOld: 3,
				gender: 'girl',
				image: 'images/princessmew.png',
				adopted: false
			}
		]  // end of kitties array

	} // end of controller

})() //Immediatley call our IIFE function
