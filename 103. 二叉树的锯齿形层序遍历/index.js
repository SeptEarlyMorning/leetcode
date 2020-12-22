/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const queue = [], res = [];
  let key = true;

  root && queue.push(root);
  while (queue.length) {
    const len = queue.length, traverseRes = [];
    for (let i = 0; i < len; ++i) {
      const node = queue.shift();
      key ? traverseRes.push(node.val) : traverseRes.unshift(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(traverseRes);
    key = !key;
  }

  return res;
};