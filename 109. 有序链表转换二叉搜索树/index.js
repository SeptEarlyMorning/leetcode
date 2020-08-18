/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  /* 分治法 */
  // return buildTree(head, null);

  /* 分治 + 中序遍历优化 */
  let len = 0, h = head;

  const buildTreeInOrder = (left, right) => {
    if (left >= right) return null;
    const mid = left + ((right - left) >> 1),
      root = new TreeNode();
 
    root.left = buildTreeInOrder(left, mid);
    root.val = head.val;
    head = head.next;
    root.right = buildTreeInOrder(mid + 1, right);

    return root;
  };

  while (h) {
    h = h.next;
    ++len;
  }

  return buildTreeInOrder(0, len);
};

const buildTree = (start, end) => {
  if (start === end) return null;

  const mid = midNode(start, end);
  const node = new TreeNode(mid.val);
  node.left = buildTree(start, mid);
  node.right = buildTree(mid.next, end);

  return node;
};

const midNode = (start, end) => {
  let fast = start, slow = start;

  while (fast !== end && fast.next !== end) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};
