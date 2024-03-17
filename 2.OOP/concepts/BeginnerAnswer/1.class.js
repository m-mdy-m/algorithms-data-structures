"1 :";

class Rectangle {
  constructor(width, heigh) {
    this.width = width;
    this.height = heigh;
  }
  calculateArea() {
    return this.width * this.height;
  }
}
console.log(`rectangle area:${new Rectangle(4,4).calculateArea()}`);
