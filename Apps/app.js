  // Main App for entire website
var MainApp = angular.module('MainApp', ['ngRoute']);

MainApp.config(function($routeProvider, $locationProvider) {
    
  $routeProvider
    .when('/', {
        templateUrl: 'Views/home.html',
        controller: 'MainController'
    })
    .when('/home', {
        templateUrl: 'Views/home.html',
        controller: 'MainController'
    })
    .when('/jamtheory', {
        templateUrl: 'Views/jamtheory.html',
        controller: 'JamTheoryController',
        controllerAs: 'jt'
    })
    .when('/axisranges', {
        templateUrl: 'Views/axisranges.html'
    })
    .when('/lvdtscaling', {
        templateUrl: 'Views/lvdtscaling.html'
    })
    .otherwise({
        redirectTo: '404.html'
    });
    
      // Utilize HTML5 History API (I.E. 11+)
    $locationProvider.html5Mode({
      enabled:true,
      requireBase: true
    });
});

  // Main controller for entire website (parent)
MainApp.controller('MainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});