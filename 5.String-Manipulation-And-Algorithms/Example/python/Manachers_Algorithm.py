class Manachers_Algorithm:
    def __init__(self, text):
        self.processed_text = "#" + "#".join(text) + "#"
        self.P = [0] * (2 * len(self.processed_text) + 1) 
        self.C_center = 0
        self.R = 0
    def calculate(self):
        for i in range(1, len(self.processed_text) - 1):
            i_mirror = 2 * self.C_center - i
            if i <= self.R:
                self.P[i] = min(self.R - i, self.P[i_mirror])  
            else:
                self.P[i] = 0
            
            while (i - self.P[i] - 1 >= 0 and i + self.P[i] + 1 < len(self.processed_text) and
                   self.processed_text[i - self.P[i] - 1] == self.processed_text[i + self.P[i] + 1]):
                self.P[i] += 1

            if i + self.P[i] > self.R:
                self.C_center = i
                self.R = i + self.P[i]

        palindromes = []
        for i in range(1, len(self.processed_text) - 1, 2):
            if self.P[i] > 0:
                start_index = (i - self.P[i]) // 2
                length = self.P[i]
                palindromes.append((start_index, length))

        return palindromes

if __name__ == "__main__":
    text = "ABABDABACDABABCABAB"
    manachers = Manachers_Algorithm(text)
    manachers_values = manachers.calculate()

    print("Text:", text)
    print("Manachers-function:", manachers_values)
    print("processed_text:",manachers.processed_text)

"""

- > output : 

Text: ABABDABACDABABCABAB
Manachers-function: [(0, 1), (0, 3), (1, 3), (3, 1), (4, 1), (5, 1), (5, 3), (7, 1), (8, 1), (9, 1), (10, 1), (10, 3), (11, 3), (13, 1), (14, 1), (15, 1), (15, 3), (16, 3), (18, 1)]
processed_text: #A#B#A#B#D#A#B#A#C#D#A#B#A#B#C#A#B#A#B# -> length : 39
---


| Index (i) | Processed Text Slice | Start Index (original text) | Length | Reason |
|-----------|----------------------|-----------------------------|--------|--------|
| (0, 1)    | `#` | 0              | 1                           | Single character 'A' at index 0 is a palindrome of length 1. |
| (0, 3)    | `#A#B#`              | 0                           | 3      | Palindrome "ABA" centered at index 1 (considering `#` as boundaries). |
| (1, 3)    | `#A#`                | (1 - 3) // 2 = -1 (ignored) | 3      | Center of this palindrome is at index 1, but it extends beyond the beginning of the processed text (invalid). |
| (3, 1)    | `#B#A#`              | 3 // 2 = 1                  | 1      | Single character 'B' at index 1 is a palindrome of length 1. |
| (4, 1)    | `#A#B#`              | 4 // 2 = 2                  | 1      | Single character 'A' at index 2 is a palindrome of length 1. |
| (5, 1)    | `#D#A#`              | 5 // 2 = 2                  | 1      | Single character 'D' at index 2 is a palindrome of length 1. |
| (5, 3)    | `#D#A#B#`            | 5 // 2 = 2                  | 3      | Palindrome "BAB" centered at index 3. |
| (7, 1)    | `#A#C#`              | 7 // 2 = 3                  | 1      | Single character 'C' at index 3 is a palindrome of length 1. |
|-----------|----------------------|-----------------------------|--------|--------|
| (18, 1)   | `#B#`                | 18 // 2 = 9                 | 1      | Single character 'B' at index 9 is a palindrome of length 1. |

```
      i (center)
   0 # A # B #  #  #  #  #
   -3-2-1--0--1--2--3--4-
          R (right boundary)
          P[i] = 1
```
```

"""