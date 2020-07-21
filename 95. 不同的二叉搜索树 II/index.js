/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (!n) {
    return [];
  }
  return recursion(1, n);
};

const recursion = (left, right) => {
  const arr = [];
  if (left > right) {
    return [null];
  }
  for (let i = left; i <= right; i++) {
    const leftArr = recursion(left, i - 1);
    const rightArr = recursion(i + 1, right);
    for (const leftNode of leftArr) {
      for (const rightNode of rightArr) {
        const midNode = new TreeNode(i);
        midNode.left = leftNode;
        midNode.right = rightNode;
        arr.push(midNode);
      }
    }
  }
  return arr;
};