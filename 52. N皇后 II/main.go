package main

func totalNQueens(n int) int {
	var dfs func(i, left, mid, right int) int
	dfs = func(i, left, mid, right int) int {
		if i >= n {
			return 1
		}

		optionalLocation, num := ^(left|mid|right)&((1<<n)-1), 0
		for optionalLocation > 0 {
			location := -optionalLocation & optionalLocation
			num += dfs(i+1, (left|location)<<1, mid|location, (right|location)>>1)
			optionalLocation &= (optionalLocation - 1)
		}

		return num
	}

	return dfs(0, 0, 0, 0)
}
