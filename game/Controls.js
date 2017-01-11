/**
* ======================================================
* @file Creates singleton instance of Control.
* @author W.B. Metzel
* @copyright W.B. Metzel 2016
* ======================================================
*
* @this {Control}
* @public
* @version 1.0.0
* 
*/
var Control = new function() {
  
  /** Member Variables/Objects */

    

  /** Member functions */
    this.init = init;
    this.keyDownHandler = keyDownHandler;
    this.keyUpHandler = keyUpHandler;
    
  /** Member Function Implementation */
    
    /**
    * @constructor
    */
    function init() {
      document.addEventListener("keydown", this.keyDownHandler, false);
      document.addEventListener("keyup", this.keyUpHandler, false);
    };
    
    
    function keyDownHandler() {

    };
    

    function keyUpHandler() {

    };
    
    // // // // // // // End Implementation // // // // // // // //
    
};