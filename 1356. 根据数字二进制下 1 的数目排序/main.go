package main

import "sort"

func sortByBits(arr []int) []int {
	sort.Slice(arr, func(i, j int) bool {
		countA, countB := bitsCount(arr[i]), bitsCount(arr[j])
		if countA == countB {
			return arr[i] < arr[j]
		}
		return countA < countB
	})
	return arr
}

func bitsCount(num int) int {
	count := 0
	for num != 0 {
		num &= (num - 1)
		count++
	}
	return count
}
