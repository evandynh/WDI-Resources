angular.module('TheMET')
	.controller('GeneralInfoController', GeneralInfoController);

function GeneralInfoController(){
	var self = this;
	self.hours = {
		Sunday: "10:00 a.m.–5:30 p.m.",
		Monday: "10:00 a.m.–5:30 p.m.",
		Tuesday: "10:00 a.m.–5:30 p.m.",
		Wednesday: "10:00 a.m.–5:30 p.m.",
		Thursday: "10:00 a.m.–5:30 p.m.",
		Friday: "10:00 a.m.–9:00 p.m.",
		Saturday: "10:00 a.m.–9:00 p.m."
	};
	self.admission = {
		Adults:  "$25",
		Seniors: "$17",
		Students:  "$12"
	};
};