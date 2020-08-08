/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  /* 递归版中序遍历 */
  // let errorOne = null, errorTwo = null, preNode = null;

  // const dfs = (node) => {
  //   if (!node) return;
  //   dfs(node.left);

  //   if (preNode && preNode.val > node.val) {
  //     if (!errorOne) {
  //       errorOne = preNode;
  //     }
  //     errorTwo = node;
  //   }
  //   preNode = node;

  //   dfs(node.right);
  // };

  // dfs(root);
  // swap(errorOne, errorTwo);

  /* Morris 中序遍历 */
  let errorOne = null, errorTwo = null, preNode = null;

  while (root) {
    if (!root.left) {
      if (preNode && preNode.val > root.val) {
        if (!errorOne) {
          errorOne = preNode;
        }
        errorTwo = root;
      }
      preNode = root;
      root = root.right;
    } else {
      let item = root.left;
      while (item.right && item.right !== root) {
        item = item.right;
      }
      if (!item.right) {
        item.right = root;
        root = root.left;
      } else {
        if (preNode && preNode.val > root.val) {
          if (!errorOne) {
            errorOne = preNode;
          }
          errorTwo = root;
        }
        preNode = root;
        root = root.right;
        item.right = null;
      }
    }
  }

  swap(errorOne, errorTwo);
};

const swap = (a, b) => {
  const item = a.val;
  a.val = b.val;
  b.val = item;
};