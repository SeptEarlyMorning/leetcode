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
var insertionSortList = function (head) {
  const sentinelNode = new ListNode(-Infinity);

  while (head) {
    let p = sentinelNode;
    while (p.next && head.val > p.next.val) {
      p = p.next;
    }
    const nextNode = head.next;
    head.next = p.next;
    p.next = head;
    head = nextNode;
  }

  return sentinelNode.next;
};