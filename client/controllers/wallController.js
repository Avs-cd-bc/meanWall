angular.module("app").controller("WallController", WallController);

function WallController($scope, $location, meanFactory){
  $scope.user = {};
  function getUser(){
    meanFactory.getUser(function(user){
      console.log(user);
      $scope.user.name = user;
    });
  }

  $scope.postMessage = function(){
    meanFactory.postMessage({name: $scope.user.name, message: $scope.message}, function(){
      console.log("Message Posted!");
    });
  }
    getUser();
}
