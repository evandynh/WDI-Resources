angular.module('InfamousCriminals')
  .controller('CriminalsListController', CriminalsListController)
  .controller('CriminalsNewController', CriminalsNewController);

CriminalsListController.$inject = ['$http'];
CriminalsNewController.$inject = ['$http', '$state'];

function CriminalsListController($http){
  var self = this;
  self.all = [];
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
    $http
      .get('http://localhost:3000/criminals')
      .then(function(response){
        self.all = response.data.criminals;
    });
  }

  function deleteCriminal(criminal){
    $http
      .delete("http://localhost:3000/criminals/" + criminal._id)
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }
}

function CriminalsNewController($http, $state){
  var self = this;
  self.addCriminal = addCriminal;
  self.newCriminal = {};

  function addCriminal(){
    $http
      .post('http://localhost:3000/criminals', self.newCriminal)
      .then(function(response){
        $state.go('index')
    });
    self.newCriminal = {};
  }
}
