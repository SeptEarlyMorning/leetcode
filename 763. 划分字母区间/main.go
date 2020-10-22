package main

func partitionLabels(S string) []int {
	last, res := [26]int{}, []int{}

	for i, v := range S {
		last[v-'a'] = i
	}

	start, end := 0, 0

	for i, v := range S {
		end = maxInt(last[v-'a'], end)
		if end == i {
			res = append(res, end-start+1)
			start = end + 1
		}
	}

	return res
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}
