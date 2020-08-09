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
var sortList = function (head) {
  const sentinelNode = new ListNode(0); // 哨兵结点
  sentinelNode.next = head;
  let len = 0, p = head;
  while (p) {
    p = p.next;
    len++;
  }

  for (let i = 1; i < len; i <<= 1) {
    let cur = sentinelNode.next, // 当前结点
      pre = sentinelNode; // 当前结点的前一个

    while (cur) {
      const left = cur;
      const right = cut(left, i); // 切割得到第二链表
      cur = cut(right, i); // 切割得到后面需要遍历的链表

      pre.next = merge(left, right); // 将得到的两个链表归并
      while (pre.next) {
        pre = pre.next;
      }
    }
  }

  return sentinelNode.next;
};

/* 切割并返回后面的链表 */
const cut = (head, n) => {
  let p = head;
  while (--n && p) {
    p = p.next;
  }
  if (!p) return null;

  const next = p.next;
  p.next = null;
  return next;
};

/* 将两个已经排序的链表归并 */
const merge = (l1, l2) => {
  const sentinelNode = new ListNode(0);
  let p = sentinelNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }

  p.next = l1 ? l1 : l2; // 将其中一个有剩余结点的链表加在之后
  return sentinelNode.next;
};