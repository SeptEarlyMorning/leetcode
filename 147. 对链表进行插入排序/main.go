package main

import "math"

// ListNode 链表
type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func insertionSortList(head *ListNode) *ListNode {
	sentinelNode := &ListNode{Val: math.MinInt64}

	for head != nil {
		p := sentinelNode
		for p.Next != nil && p.Next.Val < head.Val {
			p = p.Next
		}
		nextNode := head.Next
		head.Next, p.Next, head = p.Next, head, nextNode
	}

	return sentinelNode.Next
}
