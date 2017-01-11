/**
*
* Creates singleton instance of Polygon
*
*/
var Polygon = new function() {
  
    /* * * * * * Member Variables/Objects * * * * * */

    this.name = "Polygon";
    this.height = 0;
    this.width = 0;
    

    /* * * * * * * * Member functions * * * * * * * */

    this.init = init;
    this.sayName = sayName;
    
    
    // // // // // Member Function Implementation // // // // // //
    
    /**
    * @constructor
    * Default Values: 480 x 270
    * @param {number} width The width of the singleton instance.
    * @param {number} height The height of the singleton instance.
    */
    function init(width,height) {
      this.height = height && height < 1080 || 480;
      this.width = width && width < 900|| 270;
    };
    
    function sayName() {
      return 'Hi, I am a ' +  this.name + '.';
    };
    // // // // // // // End Implementation // // // // // // // //
    
};




Polygon.init(1000);
console.log(Polygon.sayName());
console.log('The width of this polygon is ' + Polygon.width);