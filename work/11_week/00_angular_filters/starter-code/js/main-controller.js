(function() {
  'use strict';

  angular.module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['clientData'];

  function MainController(clientData) {
    var vm = this;

    vm.clients = clientData.clients;
    vm.cities = clientData.cities;
    vm.selectedCity = vm.cities[0];

  }

})();
