package main

import (
	"fmt"
)

/**
 * Implements the Selection Sort algorithm to sort a slice of integers in ascending order.
 *
 * @param {[]int} arr - The slice of integers to be sorted.
 * @returns {[]int} - The sorted slice.
 *
 * @timeComplexity O(n^2) - Worst-case, average-case, and best-case.
 *                  The number of comparisons and swaps grows quadratically with the input size (n).
 * @spaceComplexity O(1) - In-place sorting, modifies the original slice without additional data structures.
 *
 * @additionalNotes
 *  - Sorting and Heapselect: Selection Sort is a comparison-based sorting algorithm, unlike Heap Sort
 *    which utilizes a heap data structure for efficient sorting (O(n log n) average-case). While Selection Sort
 *    is simpler, Heap Sort generally has better performance.
 *  - Pivoting: Selection Sort does not use pivoting. Pivoting is a key concept in algorithms like Quick Sort
 *    that divide and conquer the input array by partitioning it based on a chosen pivot element. Selection Sort
 *    progressively finds the minimum element within the unsorted portion and swaps it into place.
 *  - Factories: Selection Sort can be implemented using a design pattern called a factory. A factory function
 *    could create sorting function instances configured for different data types or comparison logic.
 *  - Parallel Algorithms: Selection Sort is not highly parallelizable due to its inherent dependencies between
 *    comparisons and swaps. Other sorting algorithms like Merge Sort are more suitable for parallel execution
 *    on multi-core processors.
 */
func selectionSort(arr []int) []int {
  // Loop through each element of the slice (excluding the last element)
  for i := 0; i < len(arr)-1; i++ {
    minIndex := i

    // Find the index of the minimum element in the unsorted part
    for j := i + 1; j < len(arr); j++ {
      if arr[j] < arr[minIndex] {
        minIndex = j
      }
      // Count comparisons during inner loop (for exact number calculation)
      comparisons++
    }

    // Swap the element at the current index with the minimum element if necessary
    if minIndex != i {
      arr[i], arr[minIndex] = arr[minIndex], arr[i]
    }
  }

  return arr
}

func main() {
  unsortedArray := []int{64, 25, 12, 22, 11}
  var comparisons int // Variable to track comparisons in inner loop
  sortedArray := selectionSort(append([]int{}, unsortedArray...)) // Sort a copy to avoid modifying original slice

  fmt.Println("Original Array:", unsortedArray) // Output: [64, 25, 12, 22, 11]
  fmt.Println("Sorted Array :", sortedArray)     // Output: [11, 12, 22, 25, 64]
  fmt.Println("Number of Comparisons:", comparisons) // Output: Number of Comparisons: 9 (example for this specific array)
}
