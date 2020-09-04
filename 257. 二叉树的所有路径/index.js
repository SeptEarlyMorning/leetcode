/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const resArr = [];

  /* dfs */
  // const dfs = (node, res) => {
  //   if (!node) return;
  //   if (!node.left && !node.right) {
  //     resArr.push(res + `${node.val}`);
  //     return;
  //   }
  //   res += `${node.val}->`;
  //   dfs(node.left, res);
  //   dfs(node.right, res);
  // };

  // dfs(root, '');
  // return resArr;

  /* bfs */
  if (!root) return [];
  const queNode = [root], quePath = [''];

  while (queNode.length) {
    let node = queNode.shift(), path = quePath.shift();
    if (!node.left && !node.right) {
      resArr.push(path + node.val);
    } else {
      path += `${node.val}->`;
      if (node.left) {
        queNode.push(node.left);
        quePath.push(path)
      }
      if (node.right) {
        queNode.push(node.right);
        quePath.push(path)
      }
    }
  }

  return resArr;
};