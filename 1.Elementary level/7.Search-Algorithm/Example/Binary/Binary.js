function binarySearch(arr, key) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (key < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
const arr = [0,1,2,3,4,6,100,10000];

console.log(binarySearch(arr, 100)); // 6