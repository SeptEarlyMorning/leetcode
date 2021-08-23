package leetcode

import "math"

func getMaximumGenerated(n int) (maxVal int) {
	maxVal = 0
	arr := make([]int, n+1)
	copy(arr, []int{0, 1})

	for i := 0; i <= n>>1; i++ {
		arr[2*i] = arr[i]
		if 2*i+1 <= n {
			arr[2*i+1] = arr[i] + arr[i+1]
			maxVal = int(math.Max(float64(maxVal), float64(arr[2*i+1])))
		}
	}

	return
}
