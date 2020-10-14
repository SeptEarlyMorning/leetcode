package commonchars

func commonChars(A []string) []string {
	res, strMap := []string{}, map[rune]int{}

	for _, c := range A[0] {
		strMap[c]++
	}

	for i := 1; i < len(A); i++ {
		strMapKey := map[rune]int{}

		for _, c := range A[i] {
			_, ok := strMap[c]

			if ok && strMap[c] > strMapKey[c] {
				strMapKey[c]++
			}
		}
		strMap = strMapKey
	}

	for key, val := range strMap {
		for i := 0; i < val; i++ {
			res = append(res, string(key))
		}
	}

	return res
}
