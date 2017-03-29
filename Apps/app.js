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
    .when('/intervals', {
        templateUrl: 'Views/intervals.html'
    })
    .when('/game', {
        templateUrl: 'Views/game.html'
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
//    .when('/test', {
//        templateUrl: 'test.php'
//    })
    .otherwise({
        
        // Definitely not desired, but for now...
        templateUrl: '404.html'
        //redirectTo: '404.html'
    });
    
    /*
      I would rather have hashtags in the URL than a broken website caused by HTML5 history on refresh and base inconsistencies right now.
      Will look for a better solution, perhaps without route provider.
    
      // Utilize HTML5 History API (I.E. 11+)
    $locationProvider.html5Mode({
      enabled:true,
      requireBase: true
    }); */
});

  // Main controller for entire website (parent)
MainApp.controller('MainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});
