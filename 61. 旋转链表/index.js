/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) {
    return head;
  }
  const nodeArr = [];
  const recursion = (head) => {
    if (!head) return;
    nodeArr.push(head);
    recursion(head.next);
  };
  recursion(head);
  const len = nodeArr.length;
  const modK = (2 * len - 1 - (k % len)) % len;
  nodeArr[len - 1].next = nodeArr[0];
  nodeArr[modK].next = null;
  return nodeArr[(modK + 1) % len]
};