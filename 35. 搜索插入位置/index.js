/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  /* 二分查找 */
  let left = 0, right = nums.length;

  while (left < right) {
    const mid = left + ((right - left) >> 1);

    if (target < nums[mid]) {
      right = mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return left;
};