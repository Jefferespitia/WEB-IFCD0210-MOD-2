// #Ejercicio
// Crea una aplicacion que permita calcular la superficie y el parametro de diversas figuraas geometricas: cuadrado, rectangulo, triangulo, circulo

export interface Shape {
  calculateArea(): number;
  calculatePerimeter(): number;
}


export class ShapeSquare implements Shape {
  private side: number;

  constructor(side: number) {
    this.side = side;
  }

  calculateArea(): number {
    return this.side * this.side;
  }

  calculatePerimeter(): number {
    return 4 * this.side;
  }
}


export class ShapeRectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

export class ShapeTriangle implements Shape {
  private base: number;
  private height: number;
  private sideA: number;
  private sideB: number;
  private sideC: number;

  constructor(base: number, height: number, sideA: number, sideB: number, sideC: number) {
    this.base = base;
    this.height = height;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }

  calculatePerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }
}

export class ShapeCircle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}




