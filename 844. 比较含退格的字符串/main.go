package main

func backspaceCompare(S string, T string) bool {
	/* 栈 */
	// return processed(S) == processed(T)

	/* 双指针 */
	for sIdx, tIdx, deleteLen := len(S)-1, len(T)-1, 0; sIdx >= 0 || tIdx >= 0; {
		for sIdx >= 0 && (S[sIdx] == '#' || deleteLen > 0) {
			if S[sIdx] == '#' {
				deleteLen++
			} else {
				deleteLen--
			}
			sIdx--
		}
		for tIdx >= 0 && (T[tIdx] == '#' || deleteLen > 0) {
			if T[tIdx] == '#' {
				deleteLen++
			} else {
				deleteLen--
			}
			tIdx--
		}
		if sIdx >= 0 && tIdx >= 0 {
			if S[sIdx] != T[tIdx] {
				return false
			}
		} else if sIdx >= 0 || tIdx >= 0 {
			return false
		}
		sIdx--
		tIdx--
	}

	return true
}

func processed(str string) string {
	stackStr := []rune{}

	for _, c := range str {
		if c != '#' {
			stackStr = append(stackStr, c)
		} else if len(stackStr) > 0 {
			stackStr = stackStr[:len(stackStr)-1]
		}
	}

	return string(stackStr)
}
