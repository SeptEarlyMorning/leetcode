/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true;
  let slow = head, fast = head;

  // 找到中间结点
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 反转后面的链表
  let p = slow.next
  while (p && p.next) {
    const swap = p.next;
    p.next = swap.next;
    swap.next = slow.next;
    slow.next = swap;
  }

  // 比较
  p = slow.next;
  while (p) {
    if (p.val !== head.val) {
      return false;
    }
    p = p.next;
    head = head.next;
  }

  // 还原
  p = slow.next;
  while (p && p.next) {
    const swap = p.next;
    p.next = swap.next;
    swap.next = p;
    slow.next = swap;
  }
  return true;
};