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
  if (head === null || head.next === null) {
    return true;
  }
  const midListNode = getMidListNode(head, head);
  reverseListNode(midListNode, midListNode.next);
  return compareListNode(head, midListNode.next);
};

const compareListNode = (listNodeA, listNodeB) => {
  if (listNodeA.val !== listNodeB.val) {
    return false;
  }
  if (listNodeB.next === null) {
    return null;
  }
  return compareListNode(listNodeA.next, listNodeB.next);
};

const reverseListNode = (midListNode, lastListNode) => {
  if (lastListNode.next === null) return;
  const key = lastListNode.next;
  lastListNode.next = key.next;
  key.next = midListNode.next;
  midListNode.next = key;
  reverseListNode(midListNode, lastListNode)
};

const getMidListNode = (slow, fast) => {
  if (fast.next === null || fast.next.next === null) {
    return slow;
  }
  return getMidListNode(slow.next, fast.next.next)
};