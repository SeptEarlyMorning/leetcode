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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  /* 递归 */
  // if (!root) {
  //   return;
  // }
  // flatten(root.left);
  // flatten(root.right);
  // let item = root.right;
  // root.right = root.left;
  // root.left = null;
  // while (root.right) {
  //   root = root.right;
  // }
  // root.right = item;

  /* 迭代，真正的原地算法 */
  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left;
      let predecessor = next;
      while (predecessor.right !== null) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
};