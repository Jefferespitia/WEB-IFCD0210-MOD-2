import { ShapeSquare, ShapeRectangle, ShapeTriangle, ShapeCircle } from "./shapes.ts";

const square = new ShapeSquare(5);
console.log("Square Area:", square.calculateArea());
console.log("Square Perimeter:", square.calculatePerimeter());

const rectangle = new ShapeRectangle(4, 6);
console.log("Rectangle Area:", rectangle.calculateArea());
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());

const triangle = new ShapeTriangle(4, 5, 3, 4, 5);
console.log("Triangle Area:", triangle.calculateArea());
console.log("Triangle Perimeter:", triangle.calculatePerimeter());

const circle = new ShapeCircle(3);
console.log("Circle Area:", circle.calculateArea());
console.log("Circle Perimeter:", circle.calculatePerimeter());
