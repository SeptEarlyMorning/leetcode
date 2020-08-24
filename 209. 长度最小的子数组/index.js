/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

// 暴力求解
var minSubArrayLen_violence = function (s, nums) {
  let minLen = s + 1;
  for (let i = 0; i < nums.length; i++) {
    let remainder = s;
    for (let j = i; j < nums.length; j++) {
      remainder -= nums[j];
      if (remainder <= 0) {
        minLen = Math.min(minLen, j - i + 1);
        break;
      }
    }
  }
  return minLen > s ? 0 : minLen;
};

// 双指针
var minSubArrayLen = function (s, nums) {
  let start = 0, end = 0;
  let minLen = s + 1;
  let remainder = 0;
  while (end <= nums.length) {
    if (remainder >= s) {
      minLen = Math.min(minLen, end - start);
      remainder -= nums[start];
      start++;
    } else {
      remainder += nums[end];
      end++;
    }
  }
  return minLen > s ? 0 : minLen;
};

// console.log(minSubArrayLen_violence(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen_violence(11, [1, 2, 3, 4, 5]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));

