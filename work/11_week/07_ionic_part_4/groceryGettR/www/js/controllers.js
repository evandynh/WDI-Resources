angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $window, $localStorage) {
  if(!$window.localStorage.getItem('groceries')){
    $localStorage.setObject('groceries', [])
    console.log('groceries does not exist in localStorage, creating it.')
  }

  $scope.$on('$ionicView.enter', function(e) {
    $scope.groceries = $localStorage.getObject('groceries')
    console.log($scope.groceries)
  });
})

.controller('ChatsCtrl', function($scope, $localStorage) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.groceryForm = {}

  $scope.addItemToGroceries = function (){
    event.preventDefault()

    var list = $localStorage.getObject('groceries')
    list.push($scope.groceryForm.item)
    $localStorage.setObject('groceries', list)

    alert("Item added to grocery list: " + $scope.groceryForm.item)
    $scope.groceryForm.item = ""
  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
