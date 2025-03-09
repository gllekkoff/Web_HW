class Shape {
  constructor(type) {
    this.type = type;
  }

  toString() {
    return `[Shape ${this.type}]`;
  }

  valueOf() {
    return this.getArea();
  }
}

class Rectangle extends Shape {
  constructor(h, w) {
    super("rectangle");
    this.height = h;
    this.weight = w;
  }
  getArea() {
    return this.height * this.weight;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.type = "square";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("circle");
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

const square = new Square(10);
console.log(square.getArea()); // 100

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // 50

const circle = new Circle(2);
console.log(circle.getArea()); // 12.566370614359172

console.log(`${rectangle} ${square} ${circle}`); // [Shape rectangle] [Shape square] [Shape circle]
console.log(rectangle + square - circle); // 137.4336293856408
