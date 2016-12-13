(function() { 'use strict';
    MainApp
      .controller('MajorScaleController', [MajorScale]);
      
      function MajorScale() {
        var vm = this;
        vm.key = "c";
        vm.accidental = "sharp";
        vm.semitones = ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];
        
        
        // Everybody loves the C Major scale, no accidentals
        vm.major = {
          tonic: "c",
          second: "d",
          third: "e",
          fourth: "f",
          fifth: "g",
          sixth: "a",
          seventh: "b"
        };
        /*
        vm.changeAccidentals = function(val) {
          if(val == "flat") {
            vm.semitones = ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];
          } else {
            vm.semitones = ["c","db","d","eb","e","f","gb","g","ab","a","bb","b"];
          }
        }
        
        vm.changeAccidentals(vm.accidental); */
        
        //vm.melodic = {} // must start in relative minor (6th degree of major)!! (i.e. Am as root to be in key of c)

        vm.getIndex = function(index, steps) {
          var current = index + steps;
          if(current >= 12) {
            return current - 12;
          } else {
            return current;
          }
        };
        
        vm.generateMajorScale = function(key,step1,step2,step3,step4,step5,step6) {
          var scale = {
            tonic: "",
            second: "",
            third: "",
            fourth: "",
            fifth: "",
            sixth: "",
            seventh: ""
          };

          var index = (vm.semitones).indexOf(key);
          scale['tonic'] = vm.semitones[index];
          
           // Generate second
          index = vm.getIndex(index,step1);
          scale['second'] = vm.semitones[index];
                    
           // Generate third
          index = vm.getIndex(index,step2);
          scale['third'] = vm.semitones[index];
                    
           // Generate fourth
          index = vm.getIndex(index,step3);
          scale['fourth'] = vm.semitones[index];
                    
           // Generate fifth
          index = vm.getIndex(index,step4);
          scale['fifth'] = vm.semitones[index];
                    
           // Generate sixth
          index = vm.getIndex(index,step5);
          scale['sixth'] = vm.semitones[index];
                    
           // Generate seventh
          index = vm.getIndex(index,step6);
          scale['seventh'] = vm.semitones[index];

          return scale;
          
        };

        vm.generateScale = function(key) {
          vm.major = vm.generateMajorScale(key,2,2,1,2,2,2);
        };

      }

})();