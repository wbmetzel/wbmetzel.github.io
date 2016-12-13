(function() { 'use strict';
  MainApp
    .controller('AxisRangesController',[AxisRanges]);
    
    function AxisRanges() {
      var vm = this;
      
      vm.min = 0;
      vm.max = 0;
      
      vm.distance = function() {
        return vm.max - vm.min;
      };
      
      vm.mid = function() {
        if(vm.distance() == 0) return 0;
        return vm.distance() / 2;
      };
    }
    
})();