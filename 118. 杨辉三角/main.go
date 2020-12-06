package main

func generate(numRows int) [][]int {
	yanghuiTriangle := make([][]int, numRows)
	if numRows <= 0 {
		return yanghuiTriangle
	}

	yanghuiTriangle[0] = append(yanghuiTriangle[0], 1)
	for i := 1; i < numRows; i++ {
		yanghuiTriangle[i] = make([]int, i+1)
		yanghuiTriangle[i][0], yanghuiTriangle[i][i] = 1, 1
		for j := 1; j < i; j++ {
			yanghuiTriangle[i][j] = yanghuiTriangle[i-1][j] + yanghuiTriangle[i-1][j-1]
		}
	}

	return yanghuiTriangle
}
