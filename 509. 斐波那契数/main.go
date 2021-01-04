package leetcode

func fib(n int) int {
	if n < 2 {
		return n
	}

	pre, cur := 0, 1
	for i := 2; i <= n; i++ {
		cur += pre
		pre = cur - pre
	}

	return cur
}
