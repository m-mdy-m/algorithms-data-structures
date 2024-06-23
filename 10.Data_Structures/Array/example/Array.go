package main

import "fmt"

func main() {
	// Declare and initialize a two-dimensional array
	var a [2][3]int

	// Assigning values to elements of the array
	a[0][0] = 1
	a[0][1] = 2
	a[0][2] = 3
	a[1][0] = 4
	a[1][1] = 5
	a[1][2] = 6

	// Print the elements of the array
	for i := 0; i < 2; i++ {
		for j := 0; j < 3; j++ {
			fmt.Printf("a[%d][%d] = %d\n", i, j, a[i][j])
		}
	}
}
