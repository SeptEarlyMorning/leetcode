/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  for (let head = root; head && head.left; head = head.left) {
    for (let p = head; p; p = p.next) {
      p.left.next = p.right;
      if (p.next) {
        p.right.next = p.next.left;
      }
    }
  }

  return root;
};