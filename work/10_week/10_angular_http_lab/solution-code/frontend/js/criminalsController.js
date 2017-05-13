(function() {
  'use strict'

  angular
    .module('TheCriminalsApp')
    .controller('CriminalsController', CriminalsController)

  CriminalsController.$inject = ['$http']

  function CriminalsController($http) {
    var self = this

    self.all = []
    self.newCriminal = {}
    self.addCriminal = addCriminal
    self.deleteCriminal = deleteCriminal
    self.updateStatus = updateStatus

    function getCriminals() {
      $http
        .get('http://localhost:3000/api/criminals')
        .then(function(response) {
          self.all = response.data.criminals
        }, function(error) {
          console.log(error)
        })
    }

    getCriminals()

    function addCriminal() {
      $http
        .post('http://localhost:3000/api/criminals', self.newCriminal)
        .then(function(response) {
          self.all.push(response.data.criminal)
          self.newCriminal = {}
        }, function(error) {
          console.log(error)
        })
    }

    function deleteCriminal(criminal) {
      console.log(criminal._id)
      $http
        .delete('http://localhost:3000/api/criminals/' + criminal._id)
        .then(function() {
          getCriminals()
          // self.all.splice(self.all.indexOf(criminal), 1)
        })
    }

    function updateStatus(criminal) {
      if (criminal.status == 'unknown') {
        criminal.status = 'dead'
      } else if (criminal.status == 'dead') {
        criminal.status = 'alive'
      } else {
        criminal.status = 'unknown'
      }

      $http
        .patch('http://localhost:3000/api/criminals/' + criminal._id, criminal)
        .then(function(response) {
          getCriminals()
        }, function(error) {
          console.log(error)
        })
    }
  }
})()
