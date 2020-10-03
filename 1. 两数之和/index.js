/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /* 暴力法 */
  // for (let i = 0; i < nums.length; ++i) {
  //   for (let j = i + 1; j < nums.length; ++j) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }

  /* 哈希表 */
  const map = new Map();

  for (let i = 0; i < nums.length; ++i) {
    if (map.has(nums[i])) {
      return [i, map.get(nums[i])];
    }
    map.set(target - nums[i], i);
  }
};