/**
 * Sorts an array of numbers using the Insertion Sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 *
 * Time Complexity:
 *   - Best Case: O(n) - When the array is already sorted.
 *   - Average Case: O(n^2) - In most cases.
 *   - Worst Case: O(n^2) - When the array is sorted in reverse order.
 *
 * Space Complexity: O(1) - Sorts the array in-place, without using additional data structures.
 *
 * Stable Sorting: Yes - Preserves the relative order of equal elements.
 */
function insertionSort(arr) {
  // Loop through the unsorted portion of the array (starting from the second element)
  for (let i = 1; i < arr.length; i++) {
    // Extract the current element being processed
    let currentElement = arr[i];

    // Initialize the index for shifting elements within the sorted sub-list
    let j = i;

    // Shift elements in the sorted sub-list to make space for insertion
    while (j > 0 && arr[j - 1] > currentElement) {
      // Shift larger element one position to the right
      arr[j] = arr[j - 1];
      // Move the shifting index one step back
      j = j - 1;
    }

    // Insert the current element at its rightful position in the sorted sub-list
    arr[j] = currentElement;
  }

  // Return the sorted array
  return arr;
}

// Example usage
const unsortedArray = [20, 10, 4, 51, 0, 2, 4, 0.4];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted array:", sortedArray);