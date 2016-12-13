(function() { 'use strict';
    MainApp
      .controller('JamTheoryController', [JamTheory]);

      function JamTheory() {
        var jt = this;
        jt.key = "c";
        jt.semitones = ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];
      }

})();