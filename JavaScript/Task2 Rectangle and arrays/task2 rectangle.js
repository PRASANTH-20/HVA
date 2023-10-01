class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    calculateArea() {
        return this.length * this.breadth;
    }
    calculatePerimeter() {
        return 2 * (this.length + this.breadth);
    }
}
const rectangle1 = new Rectangle(5, 8);
const rectangle2 = new Rectangle(10, 15);
const rectangle3 = new Rectangle(7, 12);

console.log("Rectangle 1 - Area:", rectangle1.calculateArea(), "Perimeter:", rectangle1.calculatePerimeter());
console.log("Rectangle 2 - Area:", rectangle2.calculateArea(), "Perimeter:", rectangle2.calculatePerimeter());
console.log("Rectangle 3 - Area:", rectangle3.calculateArea(), "Perimeter:", rectangle3.calculatePerimeter());
