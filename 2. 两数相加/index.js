/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const node = new ListNode('head');
  let keyNode = node, carry = 0;

  while (l1 || l2 || carry > 0) {
    let l1Val = l2Val = 0;
    if (l1) {
      l1Val = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      l2Val = l2.val;
      l2 = l2.next;
    }
    const sum = l1Val + l2Val + carry;
    keyNode.next = new ListNode(sum % 10);
    keyNode = keyNode.next;
    carry = ~~(sum / 10);
  }

  return node.next;
};