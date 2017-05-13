// When only the name of the module is passed in, the 'module' method returns the specified module.
angular.module('introToAngularApp')
  .controller('HomeController', HomeController)

function HomeController() {
  var self = this
  self.awesome = true
  self.numbers = [4, 8, 15, 16, 23, 42]
  self.irKat = [
    {name: 'Kate', beard: false},
    {name: 'Ira', beard: true}
  ]
  self.irKatDesc = 'well-oiled machine, baby!'
}
