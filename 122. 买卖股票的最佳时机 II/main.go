package main

func maxProfit(prices []int) int {
	maxProfitNum := 0
	for i := 1; i < len(prices); i++ {
		if num := prices[i] - prices[i-1]; num > 0 {
			maxProfitNum += num
		}
	}

	return maxProfitNum
}
