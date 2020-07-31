/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length;

  while (left < right) {
    const mid = left + ((right - left) >> 1);

    if (target > nums[mid]) {
      if (nums[mid] > nums[left] || target < nums[left]) {
        left = mid + 1;
      } else {
        if (target === nums[left]) return left;
        right = mid;
      }
    } else if (target < nums[mid]) {
      if (nums[mid] < nums[left] || target > nums[left]) {
        right = mid;
      } else {
        if (target === nums[left]) return left;
        left = mid + 1;
      }
    } else {
      return mid;
    }
  }

  return -1;
};