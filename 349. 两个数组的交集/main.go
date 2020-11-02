package main

func intersection(nums1 []int, nums2 []int) []int {
	set1, set2, res := map[int]struct{}{}, map[int]struct{}{}, []int{}

	for _, num := range nums1 {
		if _, ok := set1[num]; !ok {
			set1[num] = struct{}{}
		}
	}

	for _, num := range nums2 {
		if _, ok := set2[num]; !ok {
			set2[num] = struct{}{}
		}
	}

	for num := range set1 {
		if _, ok := set2[num]; ok {
			res = append(res, num)
		}
	}

	return res
}
