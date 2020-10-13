package swappairs

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
func swapPairs(head *ListNode) *ListNode {
	sentinelNode := &ListNode{0, head}

	for p := sentinelNode; p.Next != nil && p.Next.Next != nil; p = p.Next.Next {
		key := p.Next
		p.Next = key.Next
		key.Next = key.Next.Next
		p.Next.Next = key
	}

	return sentinelNode.Next
}
