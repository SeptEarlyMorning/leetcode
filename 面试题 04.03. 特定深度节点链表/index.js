/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
  /* BFS 广度优先遍历 */
  const lists = [];
  const que = [tree];

  while (que.length) {
    const list = new ListNode(0);
    let key = list, len = que.length;
    while (len--) {
      const root = que.shift();
      key.next = new ListNode(root.val);
      key = key.next;
      root.left && que.push(root.left);
      root.right && que.push(root.right);
    }
    lists.push(list.next);
  }

  return lists;
};