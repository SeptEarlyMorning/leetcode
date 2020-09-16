/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  /* 迭代 */
  // const que = [];

  // root && que.push(root);
  // while (que.length) {
  //   const node = que.shift();
  //   [node.left, node.right] = [node.right, node.left];
  //   node.left && que.push(node.left);
  //   node.right && que.push(node.right);
  // }

  // return root;

  /* 递归 */
  if (!root) return root;
  let { left, right } = root;
  root.right = invertTree(left);
  root.left = invertTree(right);
  return root;
};