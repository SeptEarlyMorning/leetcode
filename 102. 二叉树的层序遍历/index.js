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
var levelOrder = function (root) {
  if (!root) return [];
  const que = [root], res = [];

  while (que.length) {
    const len = que.length, nodeVals = [];
    for (let i = 0; i < len; ++i) {
      const node = que.shift();
      nodeVals.push(node.val);
      node.left && que.push(node.left);
      node.right && que.push(node.right);
    }
    res.push(nodeVals);
  }

  return res;
};