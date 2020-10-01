package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Print(minimumOperations("rrryyyrryyyrr"))
}

func minimumOperations(leaves string) int {
	var dp [3]int

	if leaves[0] == 'y' {
		dp[0] = 1
	}
	dp[1], dp[2] = math.MaxInt64, math.MaxInt64
	for i := 1; i < len(leaves); i++ {
		isRed, isYellow := boolToInt(leaves[i] == 'r'), boolToInt(leaves[i] == 'y')
		if i >= 2 {
			dp[2] = min(dp[1], dp[2]) + isYellow
		}
		dp[1] = min(dp[0], dp[1]) + isRed
		dp[0] += isYellow
	}

	return dp[2]
}

func boolToInt(b bool) int {
	if b {
		return 1
	}
	return 0
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
