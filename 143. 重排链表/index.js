/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  /* 找到中间结点 + 记录结点 */
  // if (!head || !head.next || !head.next.next) return;
  // const stack = [head];

  // let slow = head, fast = head;
  // while (fast.next && fast.next.next) {
  //   slow = slow.next;
  //   fast = fast.next.next;
  //   stack.push(slow);
  // }
  // [slow.next, slow] = [null, slow.next];
  // if (!fast.next) {
  //   stack.pop();
  // }
  // while (stack.length) {
  //   const node = stack.pop(), slowAfter = slow.next, after = node.next;
  //   node.next = slow;
  //   slow.next = after;
  //   slow = slowAfter;
  // }

  /* 找到中间结点 + 翻转链表 */
  if (!head || !head.next || !head.next.next) return;
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  [slow.next, slow] = [null, slow.next];

  let p = slow;
  while (p.next) {
    const key = p.next.next, swap = p.next;
    swap.next = slow;
    p.next = key;
    slow = swap;
  }

  while (slow) {
    const headKey = head.next, slowKey = slow.next;
    head.next = slow;
    slow.next = headKey;
    head = headKey;
    slow = slowKey;
  }
};