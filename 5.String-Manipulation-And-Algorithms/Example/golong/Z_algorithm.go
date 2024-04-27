package main

import (
  "fmt"
)
type ZAlgorithm struct {
	Text   string
	Length int
	ZValues []int
}
func NewZAlgorithm(text string) *ZAlgorithm {
  length := len(text)
  zValues := make([]int, length)
  return &ZAlgorithm{Text: text, Length: length, ZValues: zValues}
}
func (z *ZAlgorithm) CalculateZValues() {
	left, right := 0, 0
	for i := 1; i < z.Length; i++ {
	  if i <= right {
		k := i - left
		if z.Text[i] == z.Text[k] {
		  z.ZValues[i] = min(right-i+1, z.ZValues[k])
		} else {
		  left = i
		  right = i + z.ZValues[k] - 1
		}
	  } else {
		left = i
		right =i
		for right < z.Length && z.Text[right] == z.Text[right-left] {
		  right++
		}
		z.ZValues[i] = right - left - 1
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