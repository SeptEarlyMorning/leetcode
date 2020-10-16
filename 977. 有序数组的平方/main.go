package main

func sortedSquares(A []int) []int {
	/* 从中间开始的双指针 */
	// l := len(A)
	// left, right := 0, l
	// resArr := make([]int, l)

	// for left < right {
	//   mid := left + ((right - left) >> 1)

	//   if A[mid] < 0 {
	//     left++
	//   } else if A[mid] > 0 {
	//     right--
	//   } else {
	//     left, right = mid, mid
	//     break
	//   }
	// }
	// left--
	// for left >= 0 || right < l {
	//   if right >= l || (left >= 0 && -A[left] < A[right]) {
	//     resArr[right - left - 1] = A[left] * A[left]
	//     left--
	//   } else {
	//     resArr[right - left - 1] = A[right] * A[right]
	//     right++
	//   }
	// }

	// return resArr

	/* 从两端开始的双指针 */
	l := len(A)
	resArr := make([]int, l)

	for left, right := 0, l-1; left <= right; {
		if A[left] < 0 && -A[left] > A[right] {
			resArr[right-left] = A[left] * A[left]
			left++
		} else {
			resArr[right-left] = A[right] * A[right]
			right--
		}
	}

	return resArr
}
