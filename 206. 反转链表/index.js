/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /* 迭代 */
  // let pre = null, cur = head;

  // while (cur) {
  //   const item = cur.next;
  //   cur.next = pre;
  //   pre = cur;
  //   cur = item;
  // }

  // return pre;

  /* 递归 */
  if (!head || !head.next) return head;
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};