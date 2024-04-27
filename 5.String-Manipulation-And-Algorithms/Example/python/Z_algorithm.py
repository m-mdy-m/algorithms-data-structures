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
                k = i - l # Calculate the mirrored index within the window
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


""" 
-> : Output: 

Text: ABABDABACDABABCABAB
Z-function: [0, -1, 1, -1, 0, 2, -1, 1, 0, -1, 3, -1, 1, -1, 0, 3, -1, 1, -1]

Explanations:

```
  A  B  A  B D A  B A C  D A  B A  B C A  B A  B
[ 0 -1  1 -1 0 2 -1 1 0 -1 3 -1 1 -1 0 3 -1 1 -1 ]
```


Index   | Text Character  | Z-function Value  | Explanation (Visualized)
------- | --------------  | ----------------- | ------------------------
0       | A               | 0                 | The first character, so no prefix match (empty string). Represented by an empty box.
1       | B               | -1                | No prefix match starting at index 1 is a substring of the entire string. Represented by a box with "X" indicating no match.
2       | A               | 1                 | "A" itself is the longest prefix match starting at index 2. Represented by a box containing "A".
3       | B               | -1                | No prefix match starting at index 3 is a substring of the entire string. Represented by a box with "X".
4       | D               | 0                 | No prefix match starting at index 4 is a substring of the entire string (since "AB" is not a prefix of "ABABDABACDABABCABAB"). Represented by an empty box.
5       | A               | 2                 | The longest prefix match starting at index 5 is "AB" (shown as a highlighted box).
6       | B               | -1                | No prefix match starting at index 6 is a substring of the entire string. Represented by a box with "X".
7       | A               | 1                 | "A" itself is the longest prefix match starting at index 7. Represented by a box containing "A".
8       | C               | 0                 | No prefix match starting at index 8 is a substring of the entire string. Represented by an empty box.
9       | D               | -1                | No prefix match starting at index 9 is a substring of the entire string. Represented by a box with "X".
10      | A               | 3                 | The longest prefix match starting at index 10 is "ABA" (shown as a highlighted box).
11      | B               | -1                | No prefix match starting at index 11 is a substring of the entire string. Represented by a box with "X".
12      | A               | 1                 | "A" itself is the longest prefix match starting at index 12. Represented by a box containing "A".
13      | B               | -1                | No prefix match starting at index 13 is a substring of the entire string. Represented by a box with "X".
14      | C               | 0                 | No prefix match starting at index 14 is a substring of the entire string. Represented by an empty box.
15      | A               | 3                 | The longest prefix match starting at index 15 is "ABA" (shown as a highlighted box).
16      | B               | -1                | No prefix match starting at index 16 is a substring of the entire string. Represented by a box with "X".
17      | A               | 1                 | "A" itself is the longest prefix match starting at index 17. Represented by a box containing "A".
18      | B               | -1                | No prefix match starting at index 18 is a substring of the entire string. Represented by a box with "X".

```
  A      B     A     B    D    A     B    A    C     D     A      B    A     B     C     A     B   A     B
[ 0( ) -1(X) 1(A) -1(X) 0( ) 2(AB) -1(X) 1(A) 0( ) -1(X) 3(ABA) -1(X) 1(A) -1(X) 0( ) 3(ABA) -1(X) 1(A) -1(X) ]
```
"""