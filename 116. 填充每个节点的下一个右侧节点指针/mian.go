package main

// Node 二叉树
type Node struct {
	Val   int
	Left  *Node
	Right *Node
	Next  *Node
}

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Next *Node
 * }
 */

func connect(root *Node) *Node {
	for head := root; head != nil && head.Left != nil; head = head.Left {
		for p := head; p != nil; p = p.Next {
			p.Left.Next = p.Right
			if p.Next != nil {
				p.Right.Next = p.Next.Left
			}
		}
	}

	return root
}
