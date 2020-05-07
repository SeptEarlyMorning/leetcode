/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  return b(s, t);
};

const a = (s, t) => {
  if (!s && !t) {
    return true;
  }
  if ((!s && t) || (s && !t) || s.val !== t.val) {
    return false;
  }
  return a(s.left, t.left) && a(s.right, t.right);
};

const b = (s, t) => {
  if(!s) return false;
  return a(s, t) || b(s.left, t) || b(s.right, t);
};