/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * 
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  if (Math.abs(dfsDepth(root.left) - dfsDepth(root.right)) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};


const dfsDepth = (root) => {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(dfsDepth(root.left), dfsDepth(root.right));
};