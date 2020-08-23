/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  /* 回溯法 */
  const resArr = [];
  const backtracking = (nums, arr) => {
    const len = nums.length;
    if (!len) {
      resArr.push(arr);
      return;
    }
    for (let i = 0; i < len; ++i) {
      backtracking(nums.slice(0, i).concat(nums.slice(i + 1, len)), [...arr, nums[i]]);
    }
  }
  backtracking(nums, []);
  return resArr;
};