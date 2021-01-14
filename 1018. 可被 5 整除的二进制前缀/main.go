package leetcode

func prefixesDivBy5(A []int) []bool {
	res, cur := make([]bool, len(A)), 0

	for i, v := range A {
		cur = ((cur << 1) + v) % 5
		if cur == 0 {
			res[i] = true
		}
	}

	return res
}
