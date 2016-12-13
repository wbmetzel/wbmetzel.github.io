var axes = angular.module('app',[]);

axes.controller('AspectRatioController', [function() {
  var vm = this;
  
  vm.lhs = {
    vm.height = 0,
    vm.width = 0
  }
  
  vm.distance = function() {
    return vm.max - vm.min;
  };
  
  vm.mid = function() {
    if(vm.distance() == 0) return 0;
    return vm.distance() / 2;
  };
  
}]);