/*(function() {
  "use strict;"
  
  function test() {
    alert("Test complete.");
  }
  
})();
*/

function Polygon(height,width) {
  this.name = "Polygon";
  this.height = height;
  this.width = width;
}

 // Defines only one instance of function for class, some multiple instances dont create multiple functions that do the samething.
Polygon.prototype.sayName = function() {
  return 'Hi, I am a ' +  this.name + '.';
};

var p = new Polygon(300, 400);
console.log(p.sayName());
console.log('The width of this polygon is ' + p.width);