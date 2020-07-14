/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  /* 通过计算长度来解决 */
  // let headALen = listNodeLen(headA), headBLen = listNodeLen(headB);
  // if (headALen < headBLen) return recursive(headA, headB, headALen, headBLen);
  // return recursive(headB, headA, headBLen, headALen);

  /* 双指针，通过走两遍来解决 */
  let a = headA, b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};

const recursive = (short, long, shortLen, longLen) => {
  if (!short) {
    return null;
  }
  if (short === long) {
    return short;
  }
  if (longLen === shortLen) {
    return recursive(short.next, long.next, shortLen - 1, longLen - 1);
  }
  return recursive(short, long.next, shortLen, longLen - 1);
};

const listNodeLen = (root) => {
  if (!root) {
    return 0;
  }
  return listNodeLen(root.next) + 1;
};