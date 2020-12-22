package zigzaglevelorder

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
func zigzagLevelOrder(root *TreeNode) [][]int {
	queue, res, key := []*TreeNode{}, [][]int{}, true

	if root != nil {
		queue = append(queue, root)
	}

	for len(queue) != 0 {
		len := len(queue)
		traverseRes := make([]int, len)

		for i := 0; i < len; i++ {
			node := queue[i]
			if key {
				traverseRes[i] = node.Val
			} else {
				traverseRes[len-i-1] = node.Val
			}
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		queue, res, key = queue[len:], append(res, traverseRes), !key
	}

	return res
}
