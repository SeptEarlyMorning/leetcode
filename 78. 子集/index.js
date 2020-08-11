/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  /* 逐个枚举 */
  const arr = [[]];

  for (let i = 0; i < nums.length; i++) {
    const arrLen = arr.length;
    for (let j = 0; j < arrLen; j++) {
      arr.push([...arr[j], nums[i]]);
    }
  }

  return arr;
};