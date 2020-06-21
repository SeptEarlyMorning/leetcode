/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
  return recursion(nums, nums.length - 1);
};

const recursion = (nums, i) => {
  if (i === 0) {
    return nums[0];
  } else if (i === 1) {
    return Math.max(nums[0], nums[1] + nums[0]);
  } else {
    return Math.max(nums[i] + recursion(nums, i - 1), recursion(nums, i - 1))
  }
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
