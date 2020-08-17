/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  /* 暴力法 */
  // for (let i = 0; i < nums.length; ++i) {
  //   for (let j = i + 1; j < nums.length; ++j) {
  //     if (nums[i] === nums[j]) return true;
  //   }
  // }

  // return false;

  /* 排序 */
  // nums.sort((a, b) => a - b);

  // for (let i = 1; i < nums.length; ++i) {
  //   if (nums[i] === nums[i - 1]) return true;
  // }

  // return false;

  /* Set 的长度 */
  // const numsSet = new Set(nums);
  // return numsSet.size < nums.length;

  /* Set */
  const numsSet = new Set();

  for (const num of nums) {
    if (numsSet.has(num)) return true;
    numsSet.add(num);
  }

  return false;
};