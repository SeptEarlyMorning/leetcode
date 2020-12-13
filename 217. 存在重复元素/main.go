package main

func containsDuplicate(nums []int) bool {
	numSet := make(map[int]struct{}, len(nums))

	for _, num := range nums {
		if _, ok := numSet[num]; ok {
			return true
		}
		numSet[num] = struct{}{}
	}

	return false
}
