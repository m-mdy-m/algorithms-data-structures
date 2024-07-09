package main

import (
	"fmt"
	"math"
)

func binarySearch(arr []int, key int) int {
	start := 0
	end := len(arr) - 1
	for start <= end {
		mid := int(math.Round(float64(start+end) / 2))
		if arr[mid] == key {
			return mid
		}
		if key < arr[mid] {
			end = mid - 1
		} else {
			start = mid + 1
		}
	}
	return -1
}
func main() {
	arr := []int{0, 1, 2, 3, 4, 6, 100, 10000}
	fmt.Println(binarySearch(arr, 100)) // 6
}
