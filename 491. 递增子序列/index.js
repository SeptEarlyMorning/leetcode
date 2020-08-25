/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  /* dfs */
  const subArr = [], len = nums.length, numSet = new Set();
  const dfs = (sub, cur, subSet) => {
    if (cur < len) {
      while (++cur < len && subSet.has(nums[cur]));
      if (nums[cur] >= sub[sub.length - 1]) {
        const newSub = [...sub, nums[cur]];
        subArr.push(newSub);
        dfs(newSub, cur, new Set());
      }
      dfs(sub, cur, new Set([...subSet, nums[cur]]));
    }
  };

  for (let i = 0; i < len; ++i) {
    dfs([nums[i]], i, new Set());
    numSet.add(nums[i]);
    while (numSet.has(nums[++i]));
    --i;
  }

  return subArr;
};