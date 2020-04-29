/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let sum = nums.reduce((a, b) => a ^= b);
  let key = 1;
  let sum_1 = 0;

  while (!(sum & key)) {
    key <<= 1;
  }
  nums.map(num => {
    (num & key) && (sum_1 ^= num);
  });
  return [sum_1, sum ^ sum_1];
};