class ZAlgorithm:
    """
    This class implements the Z-Algorithm for efficient string searching.

    Attributes:
        text (str): The text string to search within.
        z_values (list): A list containing the Z-function values for each index in the text string.
    """

    def __init__(self, text):
        """
        Initializes the ZAlgorithm object.

        Args:
            text (str): The text string to search within.
        """

        self.text = text
        self.n = len(text)  # Store the text length
        self.z_values = [0] * self.n  # Initialize Z-values list

    def calculate_z_values(self):
        """
        Calculates the Z-function values for each index in the text string.

        Returns:
            list: A list containing the Z-function values.
        """

        l = r = 0  # Left and right pointers for tracking the longest prefix match

        for i in range(1, self.n):
            # Check if the current index is within the window of a previously found match
            if i <= r:
                k = i - l
                # Check if the character at index i matches the character at index k (within the window)
                if self.text[i] == self.text[k]:
                    self.z_values[i] = min(r - i + 1, self.z_values[k])  # Utilize mirroring for efficiency
                else:
                    l = i
                    r = i + self.z_values[k] - 1  # Adjust window based on mismatch
            else:
                # Current index is outside the window, search for a new match
                l = r = i
                while r < self.n and self.text[r] == self.text[r - l]:
                    r += 1
                self.z_values[i] = r - l - 1  # Length of the longest prefix match starting at i

        return self.z_values

if __name__ == "__main__":
    text = "ABABDABACDABABCABAB"
    z_algorithm = ZAlgorithm(text)
    z_values = z_algorithm.calculate_z_values()

    print("Text:", text)
    print("Z-function:", z_values)
