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
var hasCycle = function (head) {
  /* 快慢指针 */
  if (!head || !head.next) return false;
  let fast = head.next.next, slow = head.next;

  while (fast !== slow) {
    if (!fast || !fast.next) {
      return false;
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  return true;
};