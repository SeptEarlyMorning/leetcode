/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /* 存储每个结点 */
  // const sentinelNode = new ListNode(0, head), arr = [sentinelNode];

  // while (head) {
  //   arr.push(head);
  //   head = head.next;
  // }

  // const pre = arr[arr.length - 1 - n];
  // pre.next = pre.next.next;

  // return sentinelNode.next;

  /* 双指针 */
  const sentinelNode = new ListNode(0, head);
  let first = sentinelNode, second = sentinelNode;

  for (let i = 0; i < n; ++i) {
    first = first.next;
  }

  while (first.next) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return sentinelNode.next;
};