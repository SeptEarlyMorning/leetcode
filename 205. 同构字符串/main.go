package main

func isIsomorphic(s string, t string) bool {
	sMap, tMap := map[byte]byte{}, map[byte]byte{}

	for i := range s {
		sWord, tWord := t[i], s[i]

		if sMap[sWord] != 0 || tMap[tWord] != 0 {
			if sMap[sWord] != tWord || tMap[tWord] != sWord {
				return false
			}
		}

		sMap[sWord], tMap[tWord] = tWord, sWord
	}

	return true
}
