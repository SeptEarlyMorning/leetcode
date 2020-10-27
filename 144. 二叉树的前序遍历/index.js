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
var preorderTraversal = function (root) {
  /* 递归 */
  // const res = [];
  // const recursion = (node) => {
  //   if (!node) return;
  //   res.push(node.val);
  //   recursion(node.left);
  //   recursion(node.right);
  // }
  // recursion(root);

  // return res;

  /* 迭代 + 栈 */
  const stack = [], res = [];

  root && stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return res;
};