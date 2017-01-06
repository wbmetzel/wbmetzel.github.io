(function() { 'use strict';
  angular
      .module('app')
      .controller('DemoController', DemoCtrl);
      
      DemoCtrl.$inject = ['$scope'];
      
      function DemoCtrl($scope) {
        var vm = this;
        vm.section = 1;
        vm.nextSection = nextSection;  // Increment page
        vm.prevSection = prevSection;  // Decrement page
        vm.prefContact = "email";
        
        /*
        $scope.$watch('vm.name',function(current,original) {
          console.log('name was: %s', original);
          console.log('name now is: %s', current);
        }); */
        
        function nextSection() {
          return vm.section++;
        }
        
        function prevSection() {
          return vm.section--;
        }
        
      }
})();