/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode0}
 */
var swapPairs = function (head) {
  const sentinelNode = new ListNode(0, head);

  let p = sentinelNode;
  while (p.next && p.next.next) {
    const key = p.next;
    p.next = key.next;
    key.next = key.next.next;
    p.next.next = key;
    p = p.next.next;
  }

  return sentinelNode.next;
};