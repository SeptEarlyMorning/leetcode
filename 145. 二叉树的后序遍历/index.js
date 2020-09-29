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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  /* 递归 */
  // const res = [];
  // const dfs = (node) => {
  //   if (!node) return;
  //   dfs(node.left);
  //   dfs(node.right);
  //   res.push(node.val);
  // }
  // dfs(root);
  // return res;

  /* 迭代 */
  const res = [], stack = [];
  root && stack.push(root);

  while (stack.length) {
    const node = stack.pop();
    res.unshift(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  return res;
};