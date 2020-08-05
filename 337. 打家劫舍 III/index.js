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
var rob = function (root) {
  let sel = [], noSel = [];
  const dfs = (node) => {
    if (!node) {
      sel.push(0);
      noSel.push(0);
      return;
    }
    dfs(node.left);
    dfs(node.right);
    const rightSel = sel.pop(), leftSel = sel.pop();
    const rightNoSel = noSel.pop(), leftNoSel = noSel.pop();
    sel.push(leftNoSel + rightNoSel + node.val);
    noSel.push(Math.max(leftNoSel, leftSel) + Math.max(rightSel, rightNoSel));
  };
  dfs(root);

  return Math.max(sel[0], noSel[0]);
};