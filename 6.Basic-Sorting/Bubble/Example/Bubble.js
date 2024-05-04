function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
const unsortedArray = [20, 10, 4, 51, 0, 2, 4];
const sortedArray = bubbleSort(unsortedArray.slice());
console.log("Original array:", unsortedArray);
console.log("Sorted array:", sortedArray);
