package main

func ladderLength(beginWord string, endWord string, wordList []string) int {
	queue, wordSet := make([]string, 0, len(wordList)), map[string]struct{}{}
	queue = append(queue, beginWord)

	for _, word := range wordList {
		wordSet[word] = struct{}{}
	}

	for ladderLen := 1; len(queue) > 0; ladderLen++ {
		for l := len(queue); l > 0; l-- {
			word := queue[0]
			queue = queue[1:]
			if word == endWord {
				return ladderLen
			}
			for i := 0; i < len(word); i++ {
				for c := 'a'; c <= 'z'; c++ {
					newWord := word[0:i] + string(c) + word[i+1:]
					if _, ok := wordSet[newWord]; ok {
						queue = append(queue, newWord)
						delete(wordSet, newWord)
					}
				}
			}
		}
	}

	return 0
}
