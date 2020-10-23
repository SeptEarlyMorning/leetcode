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
func isPalindrome(head *ListNode) bool {
	if head == nil {
		return true
	}
	slow, fast := head, head
	for fast.Next != nil && fast.Next.Next != nil {
		slow, fast = slow.Next, fast.Next.Next
	}

	p := slow.Next
	for p != nil && p.Next != nil {
		swap := p.Next
		p.Next = swap.Next
		swap.Next = slow.Next
		slow.Next = swap
	}

	p = slow.Next
	for p != nil {
		if head.Val != p.Val {
			return false
		}
		head, p = head.Next, p.Next
	}

	p = slow.Next
	for p != nil && p.Next != nil {
		swap := p.Next
		p.Next = swap.Next
		swap.Next = slow.Next
		slow.Next = swap
	}
	return true
}
