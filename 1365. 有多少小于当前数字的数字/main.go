func smallerNumbersThanCurrent(nums []int) []int {
	l := len(nums)
	res, countArr := make([]int, l), [102]int{}

	for _, num := range nums {
		countArr[num+1]++
	}

	for i := 1; i < len(countArr); i++ {
		countArr[i] += countArr[i-1]
	}

	for i, v := range nums {
		res[i] = countArr[v]
	}

	return res
}