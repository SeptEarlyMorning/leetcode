package main

import "strings"

func sortString(s string) string {
	wordCount := [26]int{}

	for _, c := range s {
		wordCount[c-'a']++
	}

	res := strings.Builder{}
	for res.Len() < len(s) {
		for c := 'a'; res.Len() < len(s) && c <= 'z'; c++ {
			if wordCount[c-'a'] > 0 {
				res.WriteRune(c)
				wordCount[c-'a']--
			}
		}
		for c := 'z'; res.Len() < len(s) && c >= 'a'; c-- {
			if wordCount[c-'a'] > 0 {
				res.WriteRune(c)
				wordCount[c-'a']--
			}
		}
	}

	return res.String()
}
