angular.module("app").controller("MeanController", ["$scope", "$location", "meanFactory", MeanController]);

function MeanController($scope, $location, meanFactory){
  $scope.user = {};
  $scope.user.name = "";
  $scope.login = function(){
    if($scope.user.name != ""){
      meanFactory.login($scope.user, function(returnedData){
        $location.url("/wall");
      });
    }
  }
}
