package main

import (
  "fmt"
  "strings"
)

type ManachersAlgorithm struct {
  text          string
  processedText string
  C             []int
  P             []int
  C_center       int
  R             int
}

// Constructor initializes the ManachersAlgorithm object.
func (m *ManachersAlgorithm) constructor(text string) {
  m.text = text
  m.processedText = "#" + strings.Join(strings.Split(text, ""), "#") + "#"
  m.C = make([]int, 2*len(m.processedText)+1)
  m.P = make([]int, 2*len(m.processedText)+1)
  m.C_center = 0
  m.R = 0
}

func (m *ManachersAlgorithm) calculate() []int {
  for i := 1; i < len(m.processedText)-1; i++ {
    i_mirror := 2 * m.C_center - i
    if i <= m.R {
      m.P[i] = min(m.R-i, m.P[i_mirror])
    } else {
      m.P[i] = 0
    }

    for i-m.P[i]-1 >= 0 && i+m.P[i]+1 < len(m.processedText) &&
      m.processedText[i-m.P[i]-1] == m.processedText[i+m.P[i]+1] {
      m.P[i]++
    }

    if i+m.P[i] > m.R {
      m.C_center = i
      m.R = i + m.P[i]
    }
  }

  palindromes := []int{}
  for i := 1; i < len(m.processedText)-1; i += 2 {
    if m.P[i] > 0 {
      startIndex := (i - m.P[i]) / 2
      length := m.P[i]
      palindromes = append(palindromes, startIndex, length)
    }
  }
  return palindromes
}
func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}

func main() {
  textInput := "ABABDABACDABABCABAB"
  manachers := ManachersAlgorithm{}
  manachers.constructor(textInput)
  manachersValues := manachers.calculate()

  fmt.Println("Text:", textInput)
  fmt.Println("Manachers-function:", manachersValues) 
  fmt.Println("processed_text:", manachers.processedText)
}
/**
- > output : 

Text: ABABDABACDABABCABAB
Manachers-function: [0 1 0 3 1 3 3 1 4 1 5 1 5 3 7 1 8 1 9 1 10 1 10 3 11 3 13 1 14 1 15 1 15 3 16 3 18 1]
processed_text: #A#B#A#B#D#A#B#A#C#D#A#B#A#B#C#A#B#A#B#-> length : 39
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

 */