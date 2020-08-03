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
var maxPathSum = function (root) {
  /* 后序遍历 */
  let maxSum = -Infinity;
  const dfs = (node) => {
    if (!node) return 0;
    const leftSum = Math.max(dfs(node.left), 0);
    const rightSum =  Math.max(dfs(node.right), 0);
    maxSum = Math.max(maxSum, leftSum + rightSum + node.val);

    return Math.max(leftSum, rightSum) + node.val;
  };
  dfs(root);
  return maxSum;
};