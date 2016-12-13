  // Main App for entire website
var MainApp = angular.module('MainApp', []);

  // Main controller for entire website (parent)
MainApp.controller('MainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});