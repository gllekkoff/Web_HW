function Shape(type) {
  this.type = type;
}

Shape.prototype = {
  toString: function () {
    return `[Shape ${this.type}]`;
  },
  valueOf: function () {
    return this.getArea();
  }
};


function Rectangle(height, width) {
  Shape.call(this, "rectangle");
  this.height = height;
  this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};


function Square(side) {
  Shape.call(this, "square");
  this.side = side;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.getArea = function () {
  return Math.pow(this.side, 2);
};


function Circle(radius) {
  Shape.call(this, "circle");
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};


const square = new Square(10);
console.log(square.getArea()); // 100

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // 50

const circle = new Circle(2);
console.log(circle.getArea()); // 12.566370614359172

console.log(`${rectangle} ${square} ${circle}`); // [Shape rectangle] [Shape square] [Shape circle]
console.log(rectangle + square - circle); // 137.4336293856408
