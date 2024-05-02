/**
 * Implements the Selection Sort algorithm to sort an array in ascending order.
 *
 * @param {int[]} arr - The array of numbers to be sorted.
 * @return {int[]} - The sorted array.
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
public class SelectionSort {

    public static int[] sort(int[] arr) {
    // Loop through each element of the array (excluding the last element)
    for (int i = 0; i < arr.length - 1; i++) {
      int minIndex = i;

      // Find the index of the minimum element in the unsorted part
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      // Swap the element at the current index with the minimum element if necessary
      if (minIndex != i) {
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }

    return arr;
  }

    public static void main(String[] args) {
    int[] unsortedArray = {64, 25, 12, 22, 11};
    int[] sortedArray = sort(unsortedArray);

    System.out.println("Original Array: " + java.util.Arrays.toString(unsortedArray));
    System.out.println("Sorted Array : " + java.util.Arrays.toString(sortedArray));
  }
}
