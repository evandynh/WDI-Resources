angular.module('TheMET')
	.controller('ExhibitController', ExhibitController);

function ExhibitController(){
	var self = this;
	self.artist = 'John Sargent';
	self.title = 'Sargent Portraits of Artists & Friends';
	self.location = 'Gallery 999';
	self.headerImage = 'http://www.metmuseum.org/~/media/Images/Exhibitions/2015/Sargent/Sargent_DIGITAL_Hero.jpg?h=360&mw=988&w=988';
};