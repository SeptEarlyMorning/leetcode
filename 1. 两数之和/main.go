package main

import "fmt"

func main() {
	fmt.Print(twoSum([]int{2, 7, 11, 15}, 9))
}

func twoSum(nums []int, target int) []int {
	sumMap := make(map[int]int, 100)

	for i, v := range nums {
		j, ok := sumMap[v]
		if ok {
			return []int{i, j}
		}
		sumMap[target-v] = i
	}

	return nil
}
