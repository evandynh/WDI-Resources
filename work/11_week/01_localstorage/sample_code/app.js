angular.module('app', [])
.controller('TestCtrl', function($scope, $log, $iraStorage) {
  $scope.clickLink = function ($event){
    $log.info("You clicked me")
    console.log($event)
    $iraStorage.set("name", "Ira Herman")
    console.log($iraStorage.get("name"))

    $iraStorage.setObject("test", {name: "Ira", class: "WDI"})
    var objectTest = $iraStorage.getObject("test")
    console.log(objectTest.class)
  }
//   console.log($scope)
})

.directive('testDirective', function() {
  return {
    scope: {},
    link: function(scope) {
      console.log(scope)
    }
  }
})

.factory('$iraStorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])
