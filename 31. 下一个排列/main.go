package main

func nextPermutation(nums []int) {
	l := len(nums)
	left := l - 2

	for ; left >= 0 && nums[left] >= nums[left+1]; left-- {
	}

	if left >= 0 {
		swapIdx := l - 1
		for ; swapIdx >= 0 && nums[swapIdx] <= nums[left]; swapIdx-- {
		}
		nums[left], nums[swapIdx] = nums[swapIdx], nums[left]
	}

	left++
	for right := l - 1; left < right; right-- {
		nums[left], nums[right] = nums[right], nums[left]
		left++
	}
}
