package main

func longestMountain(A []int) int {
	preFoot, longestLen, up := -1, 0, false

	for foot := 1; foot < len(A); foot++ {
		if A[foot] > A[foot-1] {
			if !up {
				up, preFoot = true, foot-1
			}
		} else if A[foot] < A[foot-1] {
			if up {
				up = false
			}
		} else {
			up, preFoot = false, -1
		}
		if !up && preFoot != -1 {
			longestLen = maxInt(longestLen, foot-preFoot+1)
		}
	}

	return longestLen
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}
