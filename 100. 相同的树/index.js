/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  /* 深度优先遍历 */
  // if (!p && !q) return true;
  // if (!p || !q) return false;
  // if (p.val !== q.val) return false;
  // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  /* 广度优先遍历 */
  const pQue = [p], qQue = [q];

  while (pQue.length && qQue.length) {
    const pNode = pQue.shift(), qNode = qQue.shift();
    if (pNode && qNode) {
      if (pNode.val !== qNode.val) return false;
    } else if (pNode || qNode) {
      return false;
    } else {
      continue;
    }
    pQue.push(pNode.left);
    pQue.push(pNode.right);
    qQue.push(qNode.left);
    qQue.push(qNode.right);
  }

  return true;
};