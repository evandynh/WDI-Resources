angular.module('TheMET')
	.controller('DonorController', DonorController);

function DonorController(){
	var self = this;
	self.contact = {
		email: 'development@metmuseum.org',
		phone: ' 212-650-2425'
	};
	self.amounts = [ 50, 100, 250, 500, 1000, 5000];
};