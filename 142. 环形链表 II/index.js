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
var detectCycle = function (head) {
  let p = head, meetNode = getMeetNode(head);
  if (!meetNode) return null;

  while (p !== meetNode) {
    p = p.next;
    meetNode = meetNode.next;
  }

  return p;
};

const getMeetNode = (node) => {
  let fast = node, slow = node;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return fast;
  }

  return null;
};