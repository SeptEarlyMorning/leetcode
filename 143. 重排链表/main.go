package main

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
func reorderList(head *ListNode) {
	if head == nil || head.Next == nil || head.Next.Next == nil {
		return
	}
	slow, fast := head, head

	for fast.Next != nil && fast.Next.Next != nil {
		slow, fast = slow.Next, fast.Next.Next
	}

	item := slow.Next
	slow.Next = nil
	p := item
	for p.Next != nil {
		swapNode, key := p.Next, p.Next.Next
		swapNode.Next, p.Next, item = item, key, swapNode
	}

	for item != nil {
		headKey, itemKey := head.Next, item.Next
		head.Next, item.Next = item, headKey
		head, item = headKey, itemKey
	}
}
