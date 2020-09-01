/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  /* 快慢指针 */
  const len = nums.length;
  let fast = 0, slow = 0;

  while (fast < len) {
    while (nums[++fast] === nums[slow]);
    nums[++slow] = nums[fast];
  }

  return slow;
};