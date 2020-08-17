/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return height(root) > -1;
};

const height = (node) => {
  if (!node) return 0;

  const left = height(node.left);
  const right = height(node.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;

  return Math.max(left, right) + 1;
};