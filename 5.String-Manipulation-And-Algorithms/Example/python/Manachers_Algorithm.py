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
| Starting Index (i) | Length (P[i]) | Palindrome |            Diagram                 | Explanation |                                                                                                     |
|--------------------|---------------|------------|----------------------------------- |-------------|-----------------------------------------------------------------------------------------------------| 
| 0                  | 1             | A          | A#                                 | Single character palindrome centered at index 0 (A).                                                              |
| 0                  | 3             | ABA        | ^#A#B#A#                           | Longest palindrome centered at index 0, extending outwards to "ABA".                                              |
| 1                  | 3             | BAB        | #A#B#A#^                           | Longest palindrome centered at index 1, extending outwards to "BAB". (Overlaps with the previous palindrome)      |
| 3                  | 1             | D          | #A#B#D#^                           | Single character palindrome centered at index 3 (D).                                                              |
| 4                  | 1             | A          | #A#B#D#A#^                         | Single character palindrome centered at index 4 (A).                                                              |
| 5                  | 1             | B          | #A#B#D#A#B#^                       | Single character palindrome centered at index 5 (B).                                                              |
| 5                  | 3             | BAB        | #A#B#D#A#B#^                       | Longest palindrome centered at index 5, extending outwards to "BAB". (Overlaps with the previous two palindromes) |
| 7                  | 1             | D          | #A#B#D#A#B#^#                      | Single character palindrome centered at index 7 (D).                                                              |
| 8                  | 1             | A          | #A#B#D#A#B#A#^                     | Single character palindrome centered at index 8 (A).                                                              |
| 9                  | 1             | C          | #A#B#D#A#B#A#C#^                   | Single character palindrome centered at index 9 (C).                                                              |
| 10                 | 1             | B          | #A#B#D#A#B#A#C#B#^                 | Single character palindrome centered at index 10 (B).                                                             |
| 10                 | 3             | ABA        | #A#B#D#A#B#A#C#B#A#^               | Longest palindrome centered at index 10, extending outwards to "ABA". (Overlaps with the previous palindrome)     |
| 11                 | 3             | BAB        | #A#B#D#A#B#A#C#B#A#B#^             | Longest palindrome centered at index 11, extending outwards to "BAB". (Overlaps with the previous two palindromes)|
| 13                 | 1             | A          | #A#B#D#A#B#A#C#B#A#B#A#^           | Single character palindrome centered at index 13 (A).                                                             |
| 14                 | 1             | B          | #A#B#D#A#B#A#C#B#A#B#A#B#^         | Single character palindrome centered at index 14 (B).                                                             |
| 15                 | 1             | A          | #A#B#D#A#B#A#C#B#A#B#A#B#A#^       | Single character palindrome centered at index 15 (A).                                                             |
| 15                 | 3             | ABA        | #A#B#D#A#B#A#C#B#A#B#A#B#A#A#^     | Longest palindrome centered at index 15, extending outwards to "ABA". (Overlaps with the previous palindrome)     |
| 16                 | 3             | BAB        | #A#B#D#A#B#A#C#B#A#B#A#B#A#A#B#^   | Longest palindrome centered at index 16, extending outwards to "BAB".                                             |
| 18                 | 1             | B          | #A#B#D#A#B#A#C#B#A#B#A#B#A#A#B#B#^ | Single character palindrome centered at index 18 (B).                                                             |

"""