package main

func sortArrayByParityII(A []int) []int {
	even, odd := 0, 1
	for {
		for even < len(A) && (A[even]&1) == 0 {
			even += 2
		}
		if even >= len(A) {
			break
		}
		for odd < len(A) && (A[odd]&1) != 0 {
			odd += 2
		}
		if odd >= len(A) {
			break
		}
		A[even], A[odd] = A[odd], A[even]
	}

	return A
}
