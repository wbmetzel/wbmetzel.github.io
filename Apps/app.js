  // Main App for entire website
var MainApp = angular.module('MainApp', ['ngRoute']);

MainApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'Views/home.html',
        controller: 'MainController'
    })
    .when('/jamtheory', {
        templateUrl: 'Views/jamtheory.html',
        controller: 'JamTheoryController as jt'
    });
});

  // Main controller for entire website (parent)
MainApp.controller('MainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});