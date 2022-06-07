package main

func minEatingSpeed(piles []int, h int) int {
	left, right := 1, max(piles)
	helper := func(x int) bool {
		s := 0
		for _, p := range piles {
			s += (p + x - 1) / x
		}
		return s <= h
	}
	for left < right {
		mid := left + ((right - left) >> 1)
		if helper(mid) {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return left
}

func max(nums []int) int {
	ans := nums[0]
	for _, num := range nums {
		if num > ans {
			ans = num
		}
	}
	return ans
}
