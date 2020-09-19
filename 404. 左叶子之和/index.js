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
var sumOfLeftLeaves = function (root) {
  /* dfs */
  // if (!root) return 0;
  // const leftLeaves = root.left && !root.left.left && !root.left.right ? root.left.val : 0;
  // return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right) + leftLeaves;

  /* bfs */
  let leftSum = 0;
  const que = [];
  root && que.push(root);

  while (que.length) {
    const node = que.shift();
    if (node.left && !node.left.left && !node.left.right) {
      leftSum += node.left.val;
    }
    node.left && que.push(node.left);
    node.right && que.push(node.right);
  }

  return leftSum;
};