package main

import "strings"

func removeKdigits(num string, k int) string {
	stack, res := []rune{}, ""

	for _, n := range num {
		for k > 0 && len(stack) > 0 && stack[len(stack)-1] > n {
			stack = stack[:len(stack)-1]
			k--
		}
		stack = append(stack, n)
	}

	res = strings.TrimLeft(string(stack[:len(stack)-k]), "0")

	if res == "" {
		res = "0"
	}

	return res
}
