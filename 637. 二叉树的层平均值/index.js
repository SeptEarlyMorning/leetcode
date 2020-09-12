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
var averageOfLevels = function (root) {
  /* bfs */
  const que = [root], resArr = [];

  while (que.length) {
    const len = que.length;
    let sum = 0;
    for (let i = 0; i < len; ++i) {
      const node = que.shift();
      sum += node.val;
      node.left && que.push(node.left);
      node.right && que.push(node.right);
    }
    resArr.push(sum / len);
  }

  return resArr;
};