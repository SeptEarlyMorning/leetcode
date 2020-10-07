package main

import "fmt"

func main() {
	colors := []int{2, 0, 2, 1, 1, 0}
	sortColors(colors)
	fmt.Print(colors)
}

func sortColors(nums []int) {
	left, right := 0, len(nums)-1

	for i := 0; i <= right; i++ {
		if nums[i] == 0 {
			nums[i] = nums[left]
			nums[left] = 0
			left++
		} else if nums[i] == 2 {
			nums[i] = nums[right]
			nums[right] = 2
			right--
			i--
		}
	}
}
