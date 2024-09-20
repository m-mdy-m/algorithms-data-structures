/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
function bubbleSort(arr:number[]):number[] {
  // Get the length of the array for loop conditions
  const n = arr.length;

  // Outer loop: Number of passes required (n-1)
  for (let i = 0; i < n - 1; i++) {
    let swapped = false; // Flag to track if swaps occurred in a pass

    // Inner loop: Compare adjacent elements within each pass (n-i-1 comparisons)
    for (let j = 0; j < n - i - 1; j++) {
      // Check if the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they're in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true; // Set flag if a swap occurred
      }
    }

    // Optimization: Break if no swaps occurred in a pass (meaning the list is already sorted)
    if (!swapped) {
      break;
    }
  }

  // Return the sorted array
  return arr;
}

// Example usage
const unsortedArray = [20, 10, 4, 51, 0, 2, 4];
const sortedArray = bubbleSort(unsortedArray.slice());
console.log("Original array:", unsortedArray);
console.log("Sorted array:", sortedArray);
