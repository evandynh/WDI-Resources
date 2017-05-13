angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController)

function PresidentsController(){
  var self = this
  self.all = [
    {name: 'George Washington', start: 1789, end: 1797 },
    {name: 'John Adams', start: 1797, end: 1801 },
    {name: 'Thomas Jefferson', start: 1801, end: 1809 },
    {name: 'James Madison', start: 1809, end: 1817 }
  ]
  self.addPresident = addPresident
  self.newPresident = {}

  function addPresident(){
    self.all.push(self.newPresident)
    self.newPresident = {}
  }
}
