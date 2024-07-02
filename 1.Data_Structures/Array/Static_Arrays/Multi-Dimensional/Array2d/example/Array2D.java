// Define a class to represent a 2-dimensional array (matrix)
public class Array2D<T> {
    private T[][] data;  // 2D array to store elements of type T
    private int rows;    // Number of rows
    private int cols;    // Number of columns

    // Constructor to create a new 2D array with initial value
    public Array2D(int rows, int cols, T initialValue) {
        this.rows = rows;
        this.cols = cols;
        this.data = (T[][]) new Object[rows][cols]; // Create the 2D array

        // Initialize all elements with initialValue
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                this.data[i][j] = initialValue;
            }
        }
    }

    // Method to get an element at specific indices (i, j)
    public T get(int i, int j) {
        if (isValidIndex(i, j)) {
            return this.data[i][j];
        } else {
            throw new IndexOutOfBoundsException("Invalid indices (" + i + ", " + j + ")");
        }
    }

    // Method to set an element at specific indices (i, j)
    public void set(int i, int j, T value) {
        if (isValidIndex(i, j)) {
            this.data[i][j] = value;
        } else {
            throw new IndexOutOfBoundsException("Invalid indices (" + i + ", " + j + ")");
        }
    }

    // Method to print the 2D array
    public void print() {
        for (int i = 0; i < this.rows; i++) {
            for (int j = 0; j < this.cols; j++) {
                System.out.print(this.data[i][j] + " ");
            }
            System.out.println();
        }
    }

    // Helper method to check if indices are valid
    private boolean isValidIndex(int i, int j) {
        return i >= 0 && i < this.rows && j >= 0 && j < this.cols;
    }

    // Main method to demonstrate usage
    public static void main(String[] args) {
        // Example usage of Array2D
        Array2D<Integer> matrix = new Array2D<>(3, 4, 0);

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
        System.out.println("Matrix:");
        matrix.print();
    }
}