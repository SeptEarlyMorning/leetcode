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
var diameterOfBinaryTree = function (root) {
  let max = 0;

  const depth = (root) => {
    if (root === null) {
      return -1;
    }
    let left = depth(root.left);
    let right = depth(root.right);
    max = Math.max(left + right + 2, max);
    return 1 + Math.max(left, right);
  };

  depth(root);

  return max;
};