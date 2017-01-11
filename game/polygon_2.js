/*****************
*
* Newly ES6 Compliant
* NOT COMPATIBLE WITH IE!!!!
*
******************/

class Polygon {
 
  // Constructor - If one is not supplied, a default constructor is used instead:
  // constructor() { }
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }

  sayHistory() {
    console.log('"Polygon" is derived from the Greek polus (many) ' +
      'and gonia (angle).');
  }

}

/* Main */
let p = new Polygon(300, 400);
p.sayName();
console.log('The width of this polygon is ' + p.width);
/* EOF */