/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  /* 双指针 */
  const len = nums.length;
  let difference = Infinity;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; ++i) {
    let left = i + 1, rigth = len - 1;

    while (left < rigth) {
      const key = nums[i] + nums[left] + nums[rigth];
      if (Math.abs(key - target) < Math.abs(difference)) difference = key - target;
      if (key < target) {
        ++left;
      } else if (key > target) {
        --rigth;
      } else {
        return target;
      }
    }
    while (nums[i + 1] === nums[i]) {
      ++i;
    }
  }

  return difference + target;
};