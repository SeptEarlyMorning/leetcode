package leetcode

func removeDuplicates(S string) string {
	stack := make([]rune, 1, 100)
	stack[0] = ' '
	for _, c := range S {
		if c == stack[len(stack)-1] {
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, c)
		}
	}

	return string(stack[1:])
}
