package leetcode

func checkStraightLine(coordinates [][]int) bool {
	preDifX, preDifY := getDif(coordinates, 0)

	for i := 1; i < len(coordinates)-1; i++ {
		curDifX, curDifY := getDif(coordinates, i)
		if preDifX*curDifY != curDifX*preDifY {
			return false
		}
		preDifX, preDifY = curDifX, curDifY
	}

	return true
}

func getDif(arr [][]int, i int) (difX, difY int) {
	return arr[i+1][0] - arr[i][0], arr[i+1][1] - arr[i][1]
}
