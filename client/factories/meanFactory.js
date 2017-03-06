angular.module("app").factory("meanFactory", ["$http", meanFactory]);

function meanFactory($http){
  var factory = {};
  var wall = {};
  
  factory.login = function(user, callback){
    $http.post("/login", user).then(function(returnedData){
      factory.user = returnedData.data;
      callback(returnedData);
    });
  }

  factory.getUser = function(callback){
    callback(factory.user);
  }

  factory.postMessage = function(info, callback){
    console.log(info);
    $http.post("messages", info).then(function(returnedData){
      callback(returnedData);
    });
  }

  factory.Index = function(callback){
    $http.get("/wall").then(function(returnedData){
      factory.wall = returnedData.data;
      callback(factory.wall);
    });
  }
  return factory;
}
