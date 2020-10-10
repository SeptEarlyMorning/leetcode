/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
	p, meetNode := head, getMeetNode(head)

	if meetNode == nil {
		return nil
	}

	for p != meetNode {
		p, meetNode = p.Next, meetNode.Next
	}

	return p
}

func getMeetNode(node *ListNode) *ListNode {
	for fast, slow := node, node; fast != nil && fast.Next != nil; {
		fast, slow = fast.Next.Next, slow.Next
		if fast == slow {
			return fast
		}
	}
	return nil
}