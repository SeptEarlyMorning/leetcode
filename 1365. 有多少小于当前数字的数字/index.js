/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const res = [], countArr = new Array(102).fill(0);

  for (const num of nums) {
    ++countArr[num + 1];
  }

  for (let i = 1; i < countArr.length; ++i) {
    countArr[i] += countArr[i - 1];
  }

  for (let i = 0; i < nums.length; ++i) {
    res.push(countArr[nums[i]]);
  }

  return res;
};