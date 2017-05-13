angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaFlashlight, $cordovaVibration, $timeout) {

  $scope.toggleFlashlight = function (){
    // Add code here to turn on flashlight
    $cordovaFlashlight.toggle()
     .then(function (success) { console.log("flashlight toggled") },
       function (error) { /* error */ });
    // Add code here to vibrate
    $cordovaVibration.vibrate(100);
    // Advanced: You can use $timeout or $interval to trigger
    // vibration or flashlight repeatedly
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
