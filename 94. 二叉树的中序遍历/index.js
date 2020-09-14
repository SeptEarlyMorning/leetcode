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
var inorderTraversal = function (root) {
  /* 递归 */
  // const res = [];
  // const inorderTraversal = (node) => {
  //   if (!node) return;
  //   inorderTraversal(node.left);
  //   res.push(node.val);
  //   inorderTraversal(node.right);
  // }
  // inorderTraversal(root);
  // return res;

  /* 迭代模拟递归 */
  // const res = [], stack = [];

  // while (root || stack.length) {
  //   while (root) {
  //     stack.push(root);
  //     root = root.left;
  //   }
  //   root = stack.pop();
  //   res.push(root.val);
  //   root = root.right;
  // }

  // return res;

  /* Morris 中序遍历 */
  const res = [];
  let p = null;

  while (root) {
    if (root.left) {
      p = root.left;
      while (p.right && p.right !== root) {
        p = p.right;
      }
      if (!p.right) {
        p.right = root;
        root = root.left;
      } else {
        res.push(root.val);
        p.right = null;
        root = root.right;
      }
    } else {
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
};