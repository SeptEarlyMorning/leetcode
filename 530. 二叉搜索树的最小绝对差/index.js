/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let min = Infinity, pre = -Infinity;
  const dfs = (node) => {
    if (!node || !min) return;
    dfs(node.left);
    min = Math.min(node.val - pre, min);
    pre = node.val;
    dfs(node.right);
  };

  dfs(root);
  return min;
};