/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  /* 层序遍历 */
  const que = [];
  root && que.push(root);

  while (que.length) {
    const len = que.length;
    for (let i = len - 1; i >= 0; --i) {
      const node = que.shift();
      node.next = i ? que[0] : null;
      node.left && que.push(node.left);
      node.right && que.push(node.right);
    }
  }

  return root;
};