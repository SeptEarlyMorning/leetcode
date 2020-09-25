/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const dfs = (leftInorder, rightInorder, leftPostorder) => {
    if (leftInorder > rightInorder) return null;
    const node = new TreeNode(postorder[leftPostorder + rightInorder - leftInorder]);
    let rootIndex = rightInorder;
    while (rootIndex >= leftInorder) {
      if (inorder[rootIndex] === node.val) {
        break;
      }
      --rootIndex;
    }
    node.left = dfs(leftInorder, rootIndex - 1, leftPostorder);
    node.right = dfs(rootIndex + 1, rightInorder, leftPostorder + rootIndex - leftInorder);
    return node;
  };
  return dfs(0, inorder.length - 1, 0);
};