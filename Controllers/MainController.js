(function() { 'use strict';
    MainApp
      .controller('MainController', ['$location', MainController]);
      
      function MainController($location) {
        var mn = this;
        mn.currentPage = "/";
        
        mn.isActive = function(currentPage) {
          return currentPage == $location.path();
        };
        
      }

})();