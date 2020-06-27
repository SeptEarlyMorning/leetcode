/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive_my = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i + 1] === undefined || nums[i + 1] > 1) && nums[i] <= 0 || (nums[i] > 1 && i === 0)) {
      return 1;
    } else if (nums[i] >= 0 && (nums[i + 1] - nums[i] > 1 || nums[i + 1] === undefined)) {
      return nums[i] + 1;
    }
  }
  return 1;
};

var firstMissingPositive_hash = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    nums[i] <= 0 && (nums[i] = len + 1);
  }
  console.log(nums);

  for (let i = 0; i < len; i++) {
    const num = Math.abs(nums[i]);
    nums[i] <= len && (nums[num - 1] = -Math.abs(nums[num - 1]));
  }
  console.log(nums);

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return len + 1;
};

// console.log(firstMissingPositive([-3, -4, -1, -1, 1, 2, 10]));
console.log(firstMissingPositive_hash([5, 1, 2, 3, 4]));
