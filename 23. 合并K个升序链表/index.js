/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  /* 分而治之 */
  if (lists.length <= 1) return lists[0] || null;
  const newLists = [];
  for (let i = 0; i < lists.length; i += 2) {
    newLists.push(merge(lists[i], lists[i + 1] || null));
  }
  return mergeKLists(newLists);
};

const merge = (list_1, list_2) => {
  const sentinelNode = new ListNode(0);
  let p = sentinelNode;

  while (list_1 && list_2) {
    if (list_1.val < list_2.val) {
      p.next = list_1;
      list_1 = list_1.next;
    } else {
      p.next = list_2;
      list_2 = list_2.next;
    }
    p = p.next;
  }

  p.next = list_1 ? list_1 : list_2;
  return sentinelNode.next;
};