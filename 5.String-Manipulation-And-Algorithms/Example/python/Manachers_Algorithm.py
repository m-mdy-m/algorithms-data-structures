class Manachers_Algorithm:
    def __init__(self, text):
        self.text = text
        self.processed_text = "#" + "#".join(self.text) + "#"
        self.C = [0] * (2 * len(self.processed_text) + 1)  
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

"""

- > output : 

Text: ABABDABACDABABCABAB
Manachers-function: [(0, 1), (0, 3), (1, 3), (3, 1), (4, 1), (5, 1), (5, 3), (7, 1), (8, 1), (9, 1), (10, 1), (10, 3), (11, 3), (13, 1), (14, 1), (15, 1), (15, 3), (16, 3), (18, 1)]

```
| Index (i) | Length (P[i]) | Start Index (i - P[i]) // 2 | Length | Palindrome | Explanation |
|---|---|---|---|---|---|
| 0        | 1              | 0                       | 1      | A          | Single character palindrome centered at index 0 (processed text). |
| 0        | 3              | 0                       | 3      | ABA       | Palindrome centered at index 0 with radius 3, covering characters 'A', '#', 'B', and 'A'. |
| 1        | 3              | 0                       | 3      | ABA       | Overlaps with the previous palindrome (centered at 0) as they share the same center but have a different radius. |
| 3        | 1              | 1                       | 1      | B          | Single character palindrome centered at index 3 (processed text). |
| 4        | 1              | 2                       | 1      | A          | Single character palindrome centered at index 4 (processed text). |
| 5        | 1              | 2                       | 1      | B          | Single character palindrome centered at index 5 (processed text). |
| 5        | 3              | 1                       | 3      | BAB       | Palindrome centered at index 5 with radius 3, covering characters 'B', '#', 'A', and 'B'. |
| 7        | 1              | 3                       | 1      | D          | Single character palindrome centered at index 7 (processed text). |
| 8        | 1              | 4                       | 1      | A          | Single character palindrome centered at index 8 (processed text). |
| 9        | 1              | 4                       | 1      | C          | Single character palindrome centered at index 9 (processed text). |
| 10       | 1              | 5                       | 1      | D          | Single character palindrome centered at index 10 (processed text). |
| 10       | 3              | 3                       | 3      | BAB       | Overlaps with the previous palindrome (centered at 5) as they share the same center but have a different radius. |
| 11       | 3              | 4                       | 3      | ABC       | Palindrome centered at index 11 with radius 3, covering characters 'A', '#', 'B', and 'C'. |
| 13       | 1              | 6                       | 1      | A          | Single character palindrome centered at index 13 (processed text). |
| 14       | 1              | 7                       | 1      | B          | Single character palindrome centered at index 14 (processed text). |
| 15       | 1              | 7                       | 1      | A          | Single character palindrome centered at index 15 (processed text). |
| 15       | 3              | 6                       | 3      | ABA       | Overlaps with the previous palindrome (centered at 15) as they share the same center but have a different radius. |
| 16       | 3              | 7                       | 3      | ABC       | Overlaps with the previous palindrome (centered at 11) as they share the same center but have a different radius. |
| 18       | 1              | 9                       | 1      | B          | Single character palindrome centered at index 18 (processed text). |
```

"""