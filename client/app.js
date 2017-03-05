const app = angular.module("app", ["ngRoute"]);

angular.module("app").config(function($routeProvider){
  $routeProvider.when("/login", {
    templateUrl: "partials/login.html",
    controller: "MeanController"
  })
  .when("/wall", {
    templateUrl: "partials/wall.html",
    controller: "WallController"
  })
  .otherwise("/login");
});
