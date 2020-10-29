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
var sumNumbers = function (root) {
  return dfs(root, '');
};

const dfs = (node, num) => {
  if (!node) return 0;
  num += node.val;
  if (!node.left && !node.right) return ~~num;
  return dfs(node.left, num) + dfs(node.right, num);
};