/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /* 排序 */
  // return nums.sort((a, b) => a- b)[nums.length >> 1];

  /* 哈希表 */
  // const map = new Map();

  // for (const num of nums) {
  //   map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  //   if (map.get(num) > nums.length / 2) return num;
  // }

  // return -1;

  /* Boyer-Moore 投票算法 */
  let count = 0, res;

  for (const num of nums) {
    if (!count) res = num;
    count += (res === num ? 1 : -1);
  }

  return res;
};