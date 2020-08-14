/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  /* dfs 可以处理不是二叉搜索树的情况 */
  // if (!root || root.val === p.val || root.val === q.val) return root;

  // const left = lowestCommonAncestor(root.left, p, q);
  // const right = lowestCommonAncestor(root.right, p, q);
  // if (left && right) return root;

  // return left ? left : right;

  /* 递归 */
  // if (root.val > p.val && root.val > q.val) {
  //   return lowestCommonAncestor(root.left, p, q);
  // } else if (root.val < p.val && root.val < q.val) {
  //   return lowestCommonAncestor(root.right, p, q);
  // }
  // return root;

  /* 迭代 */
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      return root;
    }
  }

  return null;
};