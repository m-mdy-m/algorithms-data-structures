package main

import (
	"fmt"
	"math"
)

type Shape interface {
	getArea() float64
}

type AreaMeasurable interface {
	getAreaInCm() float64
}

type Square struct {
	Side float64
}

func (this *Square) GetArea() float64 {
	return this.Side * this.Side
}

type Circle struct {
	Radius float64
}

func (this *Circle) GetArea() float64 {
	return math.Pi * this.Radius * this.Radius
}

type ShapeAreaCalculator struct {
	shape Shape
}

func (this *ShapeAreaCalculator) getAreaInCm() float64 {
	return this.shape.getArea() * 2.54
}
func main() {
	square := Square{Side: 5}
	circle := Circle{Radius: 3}
	fmt.Printf("Area of square: %.4f\n", square.GetArea())
	fmt.Printf("Area of circle: %.4f", circle.GetArea())
}
