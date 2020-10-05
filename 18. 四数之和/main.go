package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Print(fourSum([]int{1, 0, -1, 0, -2, 2}, 0))
}

func fourSum(nums []int, target int) [][]int {
	len, resArr := len(nums), [][]int{}

	if len < 4 {
		return resArr
	}
	sort.Ints(nums)

	for i := 0; i < len-3 && nums[i]+nums[i+1]+nums[i+2]+nums[i+3] <= target; i++ {
		if i > 0 && nums[i] == nums[i-1] || nums[i]+nums[len-3]+nums[len-2]+nums[len-1] < target {
			continue
		}

		for j := i + 1; j < len-2 && nums[i]+nums[j]+nums[j+1]+nums[j+2] <= target; j++ {
			if j > i+1 && nums[j] == nums[j-1] || nums[i]+nums[j]+nums[len-2]+nums[len-1] < target {
				continue
			}

			for left, right := j+1, len-1; left < right; {
				sum := nums[i] + nums[j] + nums[left]
				if sum+nums[left+1] > target {
					break
				}
				sum += nums[right]
				if sum < target {
					left++
				} else if sum > target {
					right--
				} else {
					resArr = append(resArr, []int{nums[i], nums[j], nums[left], nums[right]})
					for left++; left < right && nums[left] == nums[left-1]; left++ {
					}
					for right--; left < right && nums[right] == nums[right+1]; right-- {
					}
				}
			}
		}
	}

	return resArr
}
