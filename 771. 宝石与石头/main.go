package main

import "fmt"

func main() {
	fmt.Print(numJewelsInStones("aA", "aAAbbbb"))
}

func numJewelsInStones(J string, S string) int {
	sum, strMap := 0, make(map[rune]int, 50)

	for _, s := range S {
		strMap[s]++
	}

	for _, j := range J {
		_, ok := strMap[j]
		if ok {
			sum += strMap[j]
		}
	}

	return sum
}
