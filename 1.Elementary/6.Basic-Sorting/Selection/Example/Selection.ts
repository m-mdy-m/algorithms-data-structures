/**
 * Implements the Selection Sort algorithm to sort an array in ascending order.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 *
 * @timeComplexity O(n^2) - Worst-case, average-case, and best-case.
 *                  The number of comparisons and swaps grows quadratically with the input size (n).
 * @spaceComplexity O(1) - In-place sorting, modifies the original array without additional data structures.
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
function selectionSort(arr: number[]): number[] {
  // Loop through each element of the array (excluding the last element)
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      // Count comparisons during inner loop (for exact number calculation)
      comparisons++;
    }

    // Swap the element at the current index with the minimum element if necessary
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example Usage
const unsortedArray: number[] = [64, 25, 12, 22, 11];
let comparisons = 0; // Variable to track comparisons in inner loop
const sortedArray = selectionSort(unsortedArray.slice()); // Sort a copy to avoid modifying original array
console.log("Original Array:", unsortedArray); // Output: [64, 25, 12, 22, 11]
console.log("Sorted Array :", sortedArray); // Output: [11, 12, 22, 25, 64]
console.log("Number of Comparisons:", comparisons); // Output: Number of Comparisons: 10 (example for this specific array)

// Note: The number of comparisons can vary depending on the input data. In the worst-case scenario (already sorted array in descending order),
// the number of comparisons will be n*(n-1)/2 which is approximately n^2 for large n.
