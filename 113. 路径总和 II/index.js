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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const resArr = [];

  const dfs = (node, res, curSum) => {
    if (!node) return;
    curSum += node.val;
    res.push(node.val);
    if (curSum === sum && !node.left && !node.right) {
      resArr.push([...res]);
      res.pop();
      return;
    }
    dfs(node.left, res, curSum);
    dfs(node.right, res, curSum);
    res.pop();
  };
  dfs(root, [], 0);
  return resArr;
};