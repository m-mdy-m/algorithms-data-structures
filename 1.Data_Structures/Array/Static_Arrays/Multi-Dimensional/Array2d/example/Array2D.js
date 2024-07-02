// Define a class to represent a 2-dimensional array (matrix)
class Array2D {
  constructor(rows, cols, initialValue) {
    // Initialize the array with specified dimensions and initial value
    this.rows = rows;
    this.cols = cols;
    this.data = new Array(rows);
    for (let i = 0; i < rows; i++) {
      this.data[i] = new Array(cols).fill(initialValue);
    }
  }

  // Function to get an element at specific indices (i, j)
  get(i, j) {
    if (i >= 0 && i < this.rows && j >= 0 && j < this.cols) {
      return this.data[i][j];
    } else {
      return undefined; // Return undefined if indices are out of bounds
    }
  }

  // Function to set an element at specific indices (i, j)
  set(i, j, value) {
    if (i >= 0 && i < this.rows && j >= 0 && j < this.cols) {
      this.data[i][j] = value;
      return true;
    } else {
      return false; // Return false if indices are out of bounds
    }
  }

  // Function to print the array
  print() {
    for (let i = 0; i < this.rows; i++) {
      let row = "";
      for (let j = 0; j < this.cols; j++) {
        row += this.get(i, j) + " ";
      }
      console.log(row);
    }
  }
}

// Example usage of Array2D class
let matrix = new Array2D(3, 4, 0);

// Set elements
matrix.set(0, 0, 1);
matrix.set(0, 1, 2);
matrix.set(0, 2, 3);
matrix.set(0, 3, 4);
matrix.set(1, 0, 5);
matrix.set(1, 1, 6);
matrix.set(1, 2, 7);
matrix.set(1, 3, 8);
matrix.set(2, 0, 9);
matrix.set(2, 1, 10);
matrix.set(2, 2, 11);
matrix.set(2, 3, 12);

// Print the matrix
console.log("Matrix:");
matrix.print();
