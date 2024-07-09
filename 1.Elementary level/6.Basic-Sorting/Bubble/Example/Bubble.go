package main

import (
  "fmt"
)

/**
 * Sorts a slice of integers in ascending order using the bubble sort algorithm.
 *
 * @param arr - The slice of integers to be sorted.
 */
func bubbleSort(arr []int) {
  // Get the length of the slice for loop conditions
  n := len(arr)

  // Outer loop: Number of passes required (n-1)
  for i := 0; i < n-1; i++ {
    swapped := false // Flag to track if swaps occurred in a pass

    // Inner loop: Compare adjacent elements within each pass (n-i-1 comparisons)
    for j := 0; j < n-i-1; j++ {
      // Check if the current element is greater than the next element
      if arr[j] > arr[j+1] {
        // Swap elements if they're in the wrong order
        temp := arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        swapped = true // Set flag if a swap occurred
      }
    }

    // Optimization: Break if no swaps occurred in a pass (meaning the list is already sorted)
    if !swapped {
      break
    }
  }
}

func main() {
  unsortedArray := []int{20, 10, 4, 51, 0, 2, 4}
  fmt.Println("Original array:", unsortedArray)

  bubbleSort(unsortedArray)

  fmt.Println("Sorted array:", unsortedArray)
}
