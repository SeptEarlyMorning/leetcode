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
func sortList(head *ListNode) *ListNode {
	sentinelNode, len := &ListNode{0, head}, 0 // 哨兵结点

	for p := head; p != nil; p = p.Next { // 获取链表长度
		len++
	}

	for i := 1; i < len; i <<= 1 {
		// cur 当前结点
		// pre 当前结点的前一个
		for cur, pre := sentinelNode.Next, sentinelNode; cur != nil; {
			left := cur
			right := cut(left, i) // 切割得到第二链表
			cur = cut(right, i)   // 切割得到后面需要遍历的链表

			pre.Next = merge(left, right) // 将得到的两个链表归并
			for pre.Next != nil {
				pre = pre.Next
			}
		}
	}

	return sentinelNode.Next
}

/* 切割并返回后面的链表 */
func cut(head *ListNode, n int) (next *ListNode) {
	p := head
	for n--; n > 0 && p != nil; n-- {
		p = p.Next
	}
	if p == nil {
		return nil
	}

	next = p.Next
	p.Next = nil
	return
}

/* 将两个已经排序的链表归并 */
func merge(l1, l2 *ListNode) *ListNode {
	sentinelNode := &ListNode{0, nil}
	p := sentinelNode

	for l1 != nil && l2 != nil {
		if l1.Val < l2.Val {
			p.Next = l1
			l1 = l1.Next
		} else {
			p.Next = l2
			l2 = l2.Next
		}
		p = p.Next
	}

	// 将其中一个有剩余结点的链表加在之后
	if l1 != nil {
		p.Next = l1
	} else {
		p.Next = l2
	}

	return sentinelNode.Next
}
