package main

import (
	"fmt"
)

// Abstraction (Drawing API)
type Drawable interface {
	Draw() string
}

// Implementations (Drawing with different colors)
type RedCircle struct{}

func (r RedCircle) Draw() string {
	return "Drawing a red circle"
}

type BlueSquare struct{}

func (b BlueSquare) Draw() string {
	return "Drawing a blue square"
}

// Abstraction (with reference to implementation)
type Drawing struct {
	shape Drawable
}

func NewDrawing(shape Drawable) *Drawing {
	return &Drawing{shape: shape}
}

func (d *Drawing) Render() string {
	return d.shape.Draw()
}

func main() {
	redCircle := RedCircle{}
	blueSquare := BlueSquare{}

	redDrawing := NewDrawing(redCircle)
	fmt.Println(redDrawing.Render()) // Output: Drawing a red circle

	blueDrawing := NewDrawing(blueSquare)
	fmt.Println(blueDrawing.Render()) // Output: Drawing a blue square
}
