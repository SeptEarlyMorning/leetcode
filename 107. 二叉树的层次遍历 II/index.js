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
var levelOrderBottom = function (root) {
  if (!root) return [];
  const resArr = [], que = [[root]];

  while (que.length) {
    const nodes = que.shift(), res = [], key = [];
    while (nodes.length) {
      const node = nodes.shift();
      res.push(node.val);
      node.left && key.push(node.left);
      node.right && key.push(node.right);
    }
    resArr.push(res);
    if (key.length) {
      que.push(key);
    }
  }

  return resArr.reverse();
};