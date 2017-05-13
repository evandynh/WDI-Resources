angular.module('boatsApp')
	.controller('BoatsController', BoatsController)

function BoatsController($log) {
	var self = this
	self.add = addBoat
	self.newBoat = {name: "", type: "", sold:false, image: ""}

	self.all = [
		{name: "Banana Sit", type: "Banana Boat", sold: true, image: "http://static.wixstatic.com/media/740099_08645fc42d3a48eeb8ee307312288314.png_512"},
		{name: "Lost Island Express", type: "Ferry", sold: false, image: "https://pixabay.com/static/uploads/photo/2013/07/13/10/34/ferry-157516_640.png"},
		{name: "Yacht's Go!", type: "Yacht", sold: true, image: "http://kitesafari.pro/public/yacht/thumbs/version_2/7bb5b6582c9b2b4c67d46c5dd5316d3f.png"},
		{name: "I Hardly Know 'Er", type: "Cutter", sold: false, image: "http://www.lochin.com/images/lochin_l367_pilot_boat.png"},
		{name: "Uber dell'acqua", type: "Water Taxi", sold: true, image: "http://products.damen.com/~/media/Products/Images/Clusters%20groups/Ferries/Passenger%20Ferry/Water%20Taxi%201606/3d/New/Damen_Water_Taxi_1606.ashx?mw=362"}
	]

	$log.log(self.all)

	function addBoat() {
		self.all.push(self.newBoat)
		self.newBoat = {name: "", type: "", sold:false, image: ""}
	}
}