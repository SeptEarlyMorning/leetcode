/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) return nums[i];
      const item = nums[i];
      [nums[i], nums[item]] = [nums[item], item];
    }
  }
  return -1;
};