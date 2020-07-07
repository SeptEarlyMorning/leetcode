/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  /* DFS 深度优先遍历 递归 */
  // if (!root) {
  //   return false;
  // }
  // if (!root.left && !root.right) {
  //   return root.val === sum;
  // }
  // sum -= root.val;
  // return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);

  /* 广度优先遍历 队列 */
  if (root === null) {
    return false;
  }
  const queNodes = [root];
  const queSum = [root.val];

  while (queNodes.length > 0) {
    const treeNode = queNodes.shift();
    const nowSum = queSum.shift();
    if (!treeNode.left && !treeNode.right) {
      if (nowSum === sum) return true;
      continue;
    }
    if (treeNode.left) {
      queNodes.push(treeNode.left);
      queSum.push(nowSum + treeNode.left.val);
    }
    if (treeNode.right) {
      queNodes.push(treeNode.right);
      queSum.push(nowSum + treeNode.right.val);
    }
  }
  return false;
};