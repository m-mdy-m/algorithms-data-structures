package main

import "fmt"

func linearSearch(arr []int, num int) int {
	for i, v := range arr {
		if v == num {
			return i
		}
	}
	return -1
}
func main() {
	number := []int{10, 2, 4, 1, 5}
	fmt.Println(linearSearch(number, 4)) // 2
	fmt.Println(linearSearch(number, 6)) // -1
}
