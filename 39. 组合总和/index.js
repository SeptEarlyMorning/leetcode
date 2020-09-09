/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const resArr = [];

  const dfs = (i, res, sum) => {
    if (i >= candidates.length) return;
    const num = candidates[i], nowSum = sum + num;
    if (nowSum < target) {
      dfs(i, [...res, num], nowSum);
    } else if (nowSum === target) {
      resArr.push([...res, num]);
    }
    dfs(i + 1, [...res], sum);
  };

  dfs(0, [], 0);
  return resArr;
};