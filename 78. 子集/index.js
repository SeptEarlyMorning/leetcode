/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  /* 逐个枚举 */
  // const arr = [[]];

  // for (let i = 0; i < nums.length; i++) {
  //   const arrLen = arr.length;
  //   for (let j = 0; j < arrLen; j++) {
  //     arr.push([...arr[j], nums[i]]);
  //   }
  // }

  // return arr;

  /* 回溯 */
  const resArr = [];

  const dfs = (i, res) => {
    if (i >= nums.length) {
      resArr.push(res);
      return
    };
    dfs(i + 1, [...res, nums[i]]);
    dfs(i + 1, [...res]);
  };
  dfs(0, [])

  return resArr;
};