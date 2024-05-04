function bubbleSort(arr) {
  let swapped = false,
    i,
    j;
  for (i = 0; i < arr.length; i++) {
    swapped = false;
    for (j = 0; arr.length - i; j++) {
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
  return arr
}
const a = bubbleSort([1, 2, 4, 6, 8])
console.log('A;',a);
