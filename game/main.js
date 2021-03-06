/**
* ======================================================
* @file Creates singleton instance of Game.
* @author W.B. Metzel
* @copyright W.B. Metzel 2016
* ======================================================
*
* @this {Game}
* @public
* @version 1.0.0
* @property {object} GameArea - The game area.
* @property {object} GameArea.canvas - HTML canvas element
* @property {number} GameArea.canvas.width - Width of canvas.
* @property {number} GameArea.canvas.height - Height of canvas.
* @property {object} GameArea.context - Canvas context.
* 
*/
var Game = new function() {
  
  /** Member Variables/Objects */
    this.GameArea = {
      canvas: document.createElement("canvas"),
      init: function(w,h) {
        this.canvas.width = w && w < 1920 || 480;
        this.canvas.height = h && h < 1080 || 270;
        this.context = this.canvas.getContext("2d");
        
        var div = document.createElement("div");
        div.id = "game-area";
        document.getElementsByTagName('body')[0].appendChild(div);
        div.appendChild(this.canvas);
      }
    };
    

  /** Member functions */
//    this.init = init;
    
    
  /** Member Function Implementation */
    
    /**
    * @constructor
    * @param {number} width - The width of the singleton instance. Default: 480
    * @param {number} height - The height of the singleton instance. Default: 270
    */
//    function init(width,height) {
//      this.height = height && height < 1080 || 480;
//      this.width = width && width < 900|| 270;
//    };
    
    
    // // // // // // // End Implementation // // // // // // // //
    
};

(function() {

//Game.GameArea.init();
})();
/* Main */

/* EOF */