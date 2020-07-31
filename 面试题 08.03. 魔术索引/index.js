/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  /* 暴力法 */
  // for (let i = 0; i < nums.length; i++) {
  //   if (i === nums[i]) return i;
  // }
  // return -1;

  /* 暴力优化 */
  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i]) {
      return i;
    } else if (i < nums[i]) {
      i = nums[i] - 1;
    }
  }
  return -1;
};