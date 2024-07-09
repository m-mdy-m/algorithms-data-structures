class Square{
    constructor(side) {
        this.side = side
    }
    getArea(){
        return this.side * this.side
    }
}
class Circle{
    constructor(radius) {
        this.radius = radius
    }
    getArea(){
        return Math.PI * this.radius * this.radius
    }
}
class ShapeAreaCalculator{
    constructor(shape) {
        this.shape = shape
    }
    getAreaInCm(){
        return this.shape.getArea()*2.54
    }
}
const square = new Square(5)
const circle = new Circle(3)
const squareAdapter = new ShapeAreaCalculator(square)
const circleAdapter = new ShapeAreaCalculator(circle)
console.log(`Area in cm : ${circleAdapter.getAreaInCm()}`);
console.log(`Area in cm : ${squareAdapter.getAreaInCm()}`);