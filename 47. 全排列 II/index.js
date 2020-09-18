/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const resArr = [], len = nums.length, selectedIndex = new Array(len).fill(false);

  const dfs = (i, res) => {
    if (res.length === len) {
      resArr.push(res);
      return;
    }
    for (let j = i; j < len; ++j) {
      if (selectedIndex[j] || (j > 0 && nums[j] === nums[j - 1]) && !selectedIndex[j - 1]) {
        continue;
      }
      selectedIndex[j] = true;
      dfs(0, [...res, nums[j]]);
      selectedIndex[j] = false;
    }
  };
  nums.sort((a, b) => a - b);
  dfs(0, []);

  return resArr;
};