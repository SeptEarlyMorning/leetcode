package main

// ListNode 单向链表
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
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	sentinelNode := &ListNode{0, head}
	first, second := sentinelNode, sentinelNode

	for i := 0; i < n; i++ {
		first = first.Next
	}

	for first.Next != nil {
		first, second = first.Next, second.Next
	}

	second.Next = second.Next.Next

	return sentinelNode.Next
}
