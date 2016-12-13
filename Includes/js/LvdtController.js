var lvdt = angular.module('app',[]);

lvdt.controller('LvdtController', [function() {
  var vm = this;
  
  vm.disp = 1;
  vm.fsvolts = 1;
  vm.impsensor = 0;
  vm.zero = 0;
  vm.sensitivity = 0;
  
  vm.scalingFactor = function() {
    if(vm.disp == 0) { return "-";}
    return vm.fsvolts / vm.disp;
  };

  vm.dispWOsens_in = function() {
    if(vm.scalingFactor == 0) { return "-";}
    return (vm.impsensor - vm.zero) / vm.scalingFactor();
  };

  vm.dispWOsens_mm = function() {
    if(vm.scalingFactor() == 0) { return "-";}
    return ((vm.impsensor - vm.zero) / vm.scalingFactor());
  };
  
  vm.dispWsens_in = function() {
    return "-";
  /*
    if(vm.dispWOsens_in() == "-") { return "-"; }
    var sense;
    if(vm.sensitivity == 0) {
      sense = 1;
    } else {
      sense = vm.sensitivity;  
    }
    return vm.dispWOsens_in() / (sense * 0.8); */
  };

  vm.dispWsens_mm = function() {
    if(vm.dispWOsens_mm() == "-") { return "-"; }
    var sense;
    if(vm.sensitivity == 0) {
      sense = 1;
    } else {
      sense = vm.sensitivity * 0.8;  
    }
    return vm.dispWOsens_mm() / (sense);
  };
  
  vm.noPTeight = function() {
    if(vm.dispWOsens_mm() == "-") { return "-"; }
    var sense;
    if(vm.sensitivity == 0) {
      sense = 1;
    } else {
      sense = vm.sensitivity;  
    }
    return vm.dispWOsens_mm() / (sense);
  };
  
  
}]);
