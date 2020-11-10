/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length;
  let left = len - 1, right = len;
  while (left-- > 0) {
    if (nums[left] < nums[left + 1]) {
      let swapIdx = left + 1;
      while (swapIdx < len) {
        if (nums[swapIdx] <= nums[left]) {
          break;
        }
        ++swapIdx;
      }
      --swapIdx;
      [nums[left], nums[swapIdx]] = [nums[swapIdx], nums[left]];
      break;
    }
  }

  while (++left < --right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
};