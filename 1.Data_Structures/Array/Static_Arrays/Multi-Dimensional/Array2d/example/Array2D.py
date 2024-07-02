class Array2D:
    def __init__(self, rows, cols, initial_value):
        self.data = [[initial_value] * cols for _ in range(rows)]
        self.rows = rows
        self.cols = cols

    def get(self, i, j):
        """ Get element at position (i, j) """
        if 0 <= i < self.rows and 0 <= j < self.cols:
            return self.data[i][j]
        return None

    def set(self, i, j, value):
        """ Set element at position (i, j) to value """
        if 0 <= i < self.rows and 0 <= j < self.cols:
            self.data[i][j] = value
            return True
        return False

    def print(self):
        """ Print the 2D array """
        for row in self.data:
            print(" ".join(map(str, row)))

# Example usage
if __name__ == "__main__":
    # Create a 3x4 matrix with initial value 0
    matrix = Array2D(3, 4, 0)

    # Set elements
    matrix.set(0, 0, 1)
    matrix.set(0, 1, 2)
    matrix.set(0, 2, 3)
    matrix.set(0, 3, 4)
    matrix.set(1, 0, 5)
    matrix.set(1, 1, 6)
    matrix.set(1, 2, 7)
    matrix.set(1, 3, 8)
    matrix.set(2, 0, 9)
    matrix.set(2, 1, 10)
    matrix.set(2, 2, 11)
    matrix.set(2, 3, 12)

    # Print the matrix
    print("Matrix:")
    matrix.print()
