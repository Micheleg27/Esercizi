class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator{
  static calculate(obj){
    let areazzz = 0;
    if(obj === square){

      areazzz = obj.side ** 2;
      return areazzz;
    }

    if(obj === rectangle){

      areazzz = obj.width * obj.height;
      return areazzz;
    }

    if(obj === circle){

      areazzz = obj.radius ** 2 * 3.14;
      return areazzz;
    }
  }
}

// Che significa che un metodo è statico?

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));