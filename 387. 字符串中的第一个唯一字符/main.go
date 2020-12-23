package firstuniqchar

func firstUniqChar(s string) int {
	/* map 存储出现次数 */
	// wordCountMap := [26]int{}

	// for _, v := range s {
	//   wordCountMap[v - 'a']++
	// }

	// for i, v := range s {
	//   if wordCountMap[v - 'a'] == 1 {
	//     return i
	//   }
	// }

	// return -1

	/* map 存储索引 */
	len, wordIdxMap := len(s), [26]int{}

	for i := range wordIdxMap {
		wordIdxMap[i] = len
	}

	for i, v := range s {
		if wordIdxMap[v-'a'] == len {
			wordIdxMap[v-'a'] = i
		} else {
			wordIdxMap[v-'a'] = len + 1
		}
	}

	idx := len
	for _, v := range wordIdxMap {
		if idx > v {
			idx = v
		}
	}

	if idx < len {
		return idx
	}

	return -1
}
