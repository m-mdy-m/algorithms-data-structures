package main

import (
	"fmt"
)

// InsertionSort sorts a slice of integers using the Insertion Sort algorithm.
func InsertionSort(arr []float64) []float64 {
	// Loop through the unsorted portion of the slice (starting from the second element)
	for i := 1; i < len(arr); i++ {
		// Extract the current element being processed
		currentElement := arr[i]

		// Initialize the index for shifting elements within the sorted sub-slice
		j := i

		// Shift elements in the sorted sub-slice to make space for insertion
		for j > 0 && arr[j-1] > currentElement {
			// Shift larger element one position to the right
			arr[j] = arr[j-1]
			// Move the shifting index one step back
			j--
		}

		// Insert the current element at its rightful position in the sorted sub-slice
		arr[j] = currentElement
	}

	// Return the sorted slice
	return arr
}

func main() {
	unsortedArray := []float64 {20, 10, 4, 51, 0, 2, 4, 0.4}
	sortedArray := InsertionSort(unsortedArray)
	fmt.Println("Sorted array:", sortedArray)
}
