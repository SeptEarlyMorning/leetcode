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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // const head = new TreeNode('', root);
  // const dfs = (root, pre, child) => {
  //   if (!root) return
  //   if (root.val === key) {
  //     if (root.left) {
  //       let left = root.left;
  //       while (left.right) {
  //         left = left.right;
  //       }
  //       left.right = root.right;
  //       pre[child] = root.left;
  //     } else {
  //       pre[child] = root.right;
  //     }
  //   } else if (root.val > key) {
  //     dfs(root.left, root, 'left');
  //   }
  //   else {
  //     dfs(root.right, root, 'right');
  //   }
  // }
  // dfs(head.left, head, 'left')
  // return head.left;

  if (root) {
    const val = root.val;
    if (val > key) {
      root.left = deleteNode(root.left, key);
    } else if (val < key) {
      root.right = deleteNode(root.right, key);
    } else {
      if (root.left) {
        let left = root.left;
        while (left.right) {
          left = left.right;
        }
        left.right = root.right;
        root = root.left;
      } else {
        root = root.right;
      }
    }
  }
  return root;
};
