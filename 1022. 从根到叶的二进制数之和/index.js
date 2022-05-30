/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  return dfs(root, "");
};

const dfs = (root, num) => {
  if (!root) return 0;
  const val = num + root.val;
  if (!root.left && !root.right) return Number.parseInt(val, 2);
  return dfs(root.left, val) + dfs(root.right, val);
};
