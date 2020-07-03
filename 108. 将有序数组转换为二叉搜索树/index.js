/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return LDR(nums, 0, nums.length - 1);
};

const LDR = (nums, left, right) => {
  if (left > right) {
    return null;
  }
  const mid = (left + right) >> 1;
  const root = new TreeNode(nums[mid]);
  root.left = LDR(nums, left, mid - 1);
  root.right = LDR(nums, mid + 1, right);
  return root;
};