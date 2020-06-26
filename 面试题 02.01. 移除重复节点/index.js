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
var removeDuplicateNodes = function (head) {
  const valSet = new Set();
  let headNode = head;
  let pre = null;

  while (headNode !== null) {
    if (valSet.has(headNode.val)) {
      pre.next = headNode.next;
    } else {
      valSet.add(headNode.val);
      pre = headNode;
    }
    headNode = headNode.next;
  }

  return head;
};