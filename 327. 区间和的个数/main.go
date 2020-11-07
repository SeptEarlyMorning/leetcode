package main

func countRangeSum(nums []int, lower int, upper int) int {
	/* 暴力法 */
	// countSum := 0

	// for i := range nums {
	//   for sum, j := 0, i; j < len(nums); j++ {
	//     sum += nums[j]
	//     if sum >= lower && sum <= upper {
	//       countSum++
	//     }
	//   }
	// }

	// return countSum

	/* 归并排序 + 前缀和 */
	var mergeSort func(lo, hi int) int
	var merge func(lo, mi, hi int) int
	preSum := make([]int, 0, len(nums))

	mergeSort = func(lo, hi int) int {
		if hi-lo < 2 {
			if hi > 0 && preSum[lo] >= lower && preSum[lo] <= upper {
				return 1
			}
			return 0
		}
		mi := lo + ((hi - lo) >> 1)
		return mergeSort(lo, mi) + mergeSort(mi, hi) + merge(lo, mi, hi)
	}

	merge = func(lo, mi, hi int) (countSum int) {
		countSum = 0
		bufferArr := make([]int, mi-lo)
		copy(bufferArr, preSum[lo:mi])

		for i := mi; i < hi; i++ {
			for j := lo; j < mi; j++ {
				sum := preSum[i] - preSum[j]
				if sum < lower {
					break
				}
				if sum <= upper {
					countSum++
				}
			}
		}

		for i := 0; i < len(bufferArr); lo++ {
			if mi >= hi || bufferArr[i] <= preSum[mi] {
				preSum[lo] = bufferArr[i]
				i++
			} else {
				preSum[lo] = preSum[mi]
				mi++
			}
		}

		return
	}

	for sum, i := 0, 0; i < len(nums); i++ {
		sum += nums[i]
		preSum = append(preSum, sum)
	}

	return mergeSort(0, len(nums))
}
