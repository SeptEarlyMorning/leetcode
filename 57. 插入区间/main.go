package main

func insert(intervals [][]int, newInterval []int) [][]int {
	res, key, newStart, newEnd := [][]int{}, false, newInterval[0], newInterval[1]

	for _, interval := range intervals {
		if newEnd < interval[0] {
			if !key {
				res, key = append(res, []int{newStart, newEnd}), true
			}
			res = append(res, interval)
		} else if newStart > interval[1] {
			res = append(res, interval)
		} else {
			newStart, newEnd = minInt(newStart, interval[0]), maxInt(newEnd, interval[1])
		}
	}

	if !key {
		res = append(res, []int{newStart, newEnd})
	}

	return res
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func minInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}
