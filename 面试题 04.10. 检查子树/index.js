/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function (t1, t2) {
  if (t1 === null) {
    return false;
  }
  return isSameTree(t1, t2) || checkSubTree(t1.left, t2) || checkSubTree(t1.right, t2);
};

const isSameTree = (t1, t2) => {
  if (t1 === null || t2 === null) {
    if (t1 === null && t2 === null) return true;
    else return false;
  }
  if (t1.val === t2.val) {
    return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
  } else {
    return false;
  }
};