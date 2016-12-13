(function() { 'use strict';
    MainApp
      .controller('MajorScaleController', [MajorScale]);
      
      function MajorScale() {
        var vm = this;
        vm.key = "c";
        vm.semitones = ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];
        
        vm.scale = {
          tonic: "c",
          second: "d",
          third: "e",
          fourth: "f",
          fifth: "g",
          sixth: "a",
          seventh: "b"
        };

        vm.getIndex = function(index, steps) {
          var current = index + steps;
          if(current >= 12) {
            return current - 12;
          } else {
            return current;
          }
        };
        
        vm.generateMajorScale = function(key) {
          var index = (vm.semitones).indexOf(key);
          vm.scale['tonic'] = vm.semitones[index];
          
           // Whole step, generate second
          index = vm.getIndex(index,2);
          vm.scale['second'] = vm.semitones[index];
                    
           // Whole step, generate third
          index = vm.getIndex(index,2);
          vm.scale['third'] = vm.semitones[index];
                    
           // Half step, generate fourth
          index = vm.getIndex(index,1);
          vm.scale['fourth'] = vm.semitones[index];
                    
           // Whole step, generate fifth
          index = vm.getIndex(index,2);
          vm.scale['fifth'] = vm.semitones[index];
                    
           // Whole step, generate sixth
          index = vm.getIndex(index,2);
          vm.scale['sixth'] = vm.semitones[index];
                    
           // Whole step, generate seventh
          index = vm.getIndex(index,2);
          vm.scale['seventh'] = vm.semitones[index];

        };



        
        vm.generateScale = function(key) {
          vm.generateMajorScale(key);
        };
        
        
        
      }

})();