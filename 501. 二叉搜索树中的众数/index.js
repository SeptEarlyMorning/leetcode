/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  const res = [];
  let count = 0, preNum = -Infinity, maxNum = 0;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    if (preNum !== node.val) {
      count = 0;
      preNum = node.val;
    }
    ++count;
    if (count >= maxNum) {
      if (count > maxNum) {
        maxNum = count;
        res.length = 0;
      }
      res.push(node.val);
    }
    preNum = node.val;
    dfs(node.right);
  }
  dfs(root);
  return res;
};