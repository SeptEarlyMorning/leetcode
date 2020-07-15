/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  /* 环装交换 */
  // const len = nums.length;
  // let head = 0, current = 0, mod = k % len;
  // if (!mod) {
  //   return nums;
  // }
  // for (let i = 0; i < len; i++) {
  //   current = (current + mod) % len;
  //   if (current === head) current = ++head;

  //   let key = nums[current];
  //   nums[current] = nums[head];
  //   nums[head] = key;
  // }
  // return nums;

  /* 直接切割，使用 js 的 API */
  return nums.unshift(...nums.splice(nums.length - (k % nums.length)));
};