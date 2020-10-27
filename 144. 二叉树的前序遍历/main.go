package main

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
func preorderTraversal(root *TreeNode) []int {
	/* 递归 */
	// res := []int{}
	// var recursion func(node *TreeNode)
	// recursion = func(node *TreeNode) {
	//   if node == nil {
	//     return
	//   }
	//   res = append(res, node.Val)
	//   recursion(node.Left)
	//   recursion(node.Right)
	// }
	// recursion(root)

	// return res

	/* 迭代 + 栈 */
	stack, res := []*TreeNode{}, []int{}

	if root != nil {
		stack = append(stack, root)
	}

	for len(stack) > 0 {
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		res = append(res, node.Val)
		if node.Right != nil {
			stack = append(stack, node.Right)
		}
		if node.Left != nil {
			stack = append(stack, node.Left)
		}
	}

	return res
}
