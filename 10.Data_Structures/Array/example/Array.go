package main

import (
	"fmt"
)

// Define a struct to represent a 2-dimensional array (matrix)
type Array2D struct {
	data [][]int // Slice of slices to store elements of the array
	rows int     // Number of rows
	cols int     // Number of columns
}

// Constructor function to create a new 2D array
func NewArray2D(rows, cols int, initialValue int) *Array2D {
	data := make([][]int, rows)
	for i := range data {
		data[i] = make([]int, cols)
		for j := range data[i] {
			data[i][j] = initialValue
		}
	}

	return &Array2D{data, rows, cols}
}

// Function to get an element at specific indices (i, j)
func (a *Array2D) Get(i, j int) (int, bool) {
	if i >= 0 && i < a.rows && j >= 0 && j < a.cols {
		return a.data[i][j], true
	}
	return 0, false
}

// Function to set an element at specific indices (i, j)
func (a *Array2D) Set(i, j, value int) bool {
	if i >= 0 && i < a.rows && j >= 0 && j < a.cols {
		a.data[i][j] = value
		return true
	}
	return false
}

// Function to print the array
func (a *Array2D) Print() {
	for i := 0; i < a.rows; i++ {
		for j := 0; j < a.cols; j++ {
			fmt.Printf("%d ", a.data[i][j])
		}
		fmt.Println()
	}
}

func main() {
	// Example usage of Array2D
	matrix := NewArray2D(3, 4, 0)

	// Set elements
	matrix.Set(0, 0, 1)
	matrix.Set(0, 1, 2)
	matrix.Set(0, 2, 3)
	matrix.Set(0, 3, 4)
	matrix.Set(1, 0, 5)
	matrix.Set(1, 1, 6)
	matrix.Set(1, 2, 7)
	matrix.Set(1, 3, 8)
	matrix.Set(2, 0, 9)
	matrix.Set(2, 1, 10)
	matrix.Set(2, 2, 11)
	matrix.Set(2, 3, 12)

	// Print the matrix
	fmt.Println("Matrix:")
	matrix.Print()
}
