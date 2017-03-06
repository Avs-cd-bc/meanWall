angular.module("app").controller("WallController", WallController);

function WallController($scope, $location, meanFactory){
  $scope.user = {};
  $scope.wall = {};
  function getUser(){
    meanFactory.getUser(function(user){
      if(!user){
        $location.url("/login");
      }
      $scope.user.name = user;
    });
  }
  function Index(){
    meanFactory.Index(function(factoryData){
      console.log("calling index");
      $scope.wall = factoryData;
      console.log($scope.wall);
    });
  }

  $scope.postMessage = function(){
    meanFactory.postMessage({name: $scope.user.name, message: $scope.message}, function(){
      console.log("Message Posted!");
    });
  }

  getUser();
  Index();


}
