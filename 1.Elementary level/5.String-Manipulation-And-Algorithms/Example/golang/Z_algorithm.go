package main

import (
  "fmt"
)
/**
This class implements the Z-Algorithm for efficient string searching.
Attributes:
    text (str): The text string to search within.
    z_values (list): A list containing the Z-function values for each index in the text string.
 */

type ZAlgorithm struct {
	Text   string
	Length int
	ZValues []int
}
func NewZAlgorithm(text string) *ZAlgorithm {
	/**
     Initializes the ZAlgorithm object.
     Args:
        text (str): The text string to search within.
     */
  length := len(text)
  zValues := make([]int, length)
  return &ZAlgorithm{Text: text, Length: length, ZValues: zValues}
}
func (z *ZAlgorithm) CalculateZValues() {
	/**
    Calculates the Z-function values for each index in the text string.

    Returns:
        list: A list containing the Z-function values.
     */
	left, right := 0, 0 // Left and right pointers for tracking the longest prefix match
	for i := 1; i < z.Length; i++ {
        // Check if the current index is within the window of a previously found match
	  if i <= right {
		k := i - left // Calculate the mirrored index within the window
		if z.Text[i] == z.Text[k] {
		  z.ZValues[i] = min(right-i+1, z.ZValues[k])  // Utilize mirroring for efficiency
		} else {
          // Mismatch, update window based on previously found Z-value
		  left = i
		  right = i + z.ZValues[k] - 1 
		}
	  } else {
        // Current index is outside the window, search for a new match
		left = i
		right =i
		for right < z.Length && z.Text[right] == z.Text[right-left] {
		  right++
		}
		z.ZValues[i] = right - left - 1  // Length of the new match
	  }
	}
}
func min(a, b int) int {
	if a < b {
	  return a
	}
	return b
}
  
func main() {
	text := "ABABDABACDABABCABAB"
	zAlgorithm := NewZAlgorithm(text)
	zAlgorithm.CalculateZValues()
  
	fmt.Println("Text:", text)
	fmt.Println("Z-function:", zAlgorithm.ZValues)
}
/**
-> : Output: 

Text: ABABDABACDABABCABAB
Z-function: [0, -1, 1, -1, 0, 2, -1, 1, 0, -1, 3, -1, 1, -1, 0, 3, -1, 1, -1]

Explanations:

  A  B  A  B D A  B A C  D A  B A  B C A  B A  B
[ 0 -1  1 -1 0 2 -1 1 0 -1 3 -1 1 -1 0 3 -1 1 -1 ]


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

  A      B     A     B    D    A     B    A    C     D     A      B    A     B     C     A     B   A     B
[ 0( ) -1(X) 1(A) -1(X) 0( ) 2(AB) -1(X) 1(A) 0( ) -1(X) 3(ABA) -1(X) 1(A) -1(X) 0( ) 3(ABA) -1(X) 1(A) -1(X) ]
 */