package main

import "fmt"

// ListNode 链表
type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	l1, l2 := &ListNode{2, &ListNode{4, &ListNode{3, nil}}}, &ListNode{5, &ListNode{6, &ListNode{4, nil}}}
	sum := addTwoNumbers(l1, l2)

	for sum != nil {
		fmt.Print(sum.Val)
		sum = sum.Next
	}
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	head, carry := &ListNode{0, nil}, 0
	copyHead := head

	for l1 != nil || l2 != nil || carry > 0 {
		sum := getAdded(&l1) + getAdded(&l2) + carry
		copyHead.Next, carry = &ListNode{sum % 10, nil}, sum/10
		copyHead = copyHead.Next
	}

	return head.Next
}

func getAdded(li **ListNode) int {
	if *li == nil {
		return 0
	}
	tmp := *li
	*li = tmp.Next
	return tmp.Val
}
