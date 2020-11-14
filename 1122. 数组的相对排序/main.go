package main

func relativeSortArray(arr1 []int, arr2 []int) []int {
	countArr, res := [1001]int{}, []int{}

	for _, num := range arr1 {
		countArr[num]++
	}

	for _, num := range arr2 {
		for countArr[num] > 0 {
			res = append(res, num)
			countArr[num]--
		}
	}

	for idx, num := range countArr {
		for num > 0 {
			res = append(res, idx)
			num--
		}
	}

	return res
}
