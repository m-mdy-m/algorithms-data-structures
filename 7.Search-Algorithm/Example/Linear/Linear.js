const numbers = [10, 2, 4, 1, 5];

function linearSearch(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}
