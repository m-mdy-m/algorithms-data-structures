// Define a struct to represent a 2-dimensional array (matrix)
struct Array2D<T> {
    data: Vec<T>,   // Vector to store the elements of the array
    rows: usize,    // Number of rows
    cols: usize,    // Number of columns
}

impl<T> Array2D<T> {
    // Constructor to create a new 2D array
    fn new(rows: usize, cols: usize, initial_value: T) -> Self
    where
        T: Clone,
    {
        // Initialize the array with a default value
        let data = vec![initial_value; rows * cols];

        Array2D { data, rows, cols }
    }

    // Function to access an element at specific indices (i, j)
    fn get(&self, i: usize, j: usize) -> Option<&T> {
        if i < self.rows && j < self.cols {
            let index = i * self.cols + j;
            Some(&self.data[index])
        } else {
            None
        }
    }

    // Function to set an element at specific indices (i, j)
    fn set(&mut self, i: usize, j: usize, value: T) -> bool
    where
        T: Clone,
    {
        if i < self.rows && j < self.cols {
            let index = i * self.cols + j;
            self.data[index] = value;
            true
        } else {
            false
        }
    }

    // Function to print the array
    fn print(&self)
    where
        T: std::fmt::Debug,
    {
        for i in 0..self.rows {
            for j in 0..self.cols {
                if let Some(value) = self.get(i, j) {
                    print!("{:?} ", value);
                }
            }
            println!();
        }
    }
}

fn main() {
    // Example usage of Array2D
    let mut matrix: Array2D<i32> = Array2D::new(3, 4, 0);

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
    println!("Matrix:");
    matrix.print();
}
