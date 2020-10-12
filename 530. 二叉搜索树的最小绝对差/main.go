package main

import "math"

// TreeNode 二叉树
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func getMinimumDifference(root *TreeNode) int {
	min, pre := math.MaxInt64, -1

	var dfs func(*TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil || min == 0 {
			return
		}
		dfs(node.Left)
		if pre != -1 {
			min = getMinNum(node.Val-pre, min)
		}
		pre = node.Val
		dfs(node.Right)
	}

	dfs(root)
	return min
}

func getMinNum(a, b int) int {
	if a < b {
		return a
	}
	return b
}
