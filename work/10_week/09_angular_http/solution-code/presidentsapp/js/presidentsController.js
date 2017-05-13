angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController)

PresidentsController.$inject = ['$http']

function PresidentsController($http){
  var self = this
  self.all = []
  self.addPresident = addPresident
  self.deletePresident = deletePresident
  self.newPresident = {}

  function getPresidents() {
    $http
      .get('http://localhost:3000/presidents')
      .then(function(response) {
        self.all = response.data.presidents
      })
  }

  getPresidents()

  function addPresident(){
    $http
      .post('http://localhost:3000/presidents', self.newPresident)
      .then(function(response) {
        // getPresidents()
        self.all.push(response.data.president)
      })
      self.newPresident = {}
  }

  function deletePresident(president) {
    $http
      .delete('http://localhost:3000/presidents/' + president._id)
      .then(function(response) {
        getPresidents()
      })
  }
}
