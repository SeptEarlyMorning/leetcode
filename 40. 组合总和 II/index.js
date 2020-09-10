/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  /* 先排序，在遍历 */
  const resArr = [];
  candidates.sort((a, b) => a - b);
  const dfs = (i, sum, res) => {
    if (i >= candidates.length) return;
    const num = candidates[i], nowSum = sum + num;
    if (nowSum === target) {
      resArr.push([...res, num]);
    } else if (nowSum < target) {
      dfs(i + 1, nowSum, [...res, num]);
    }
    while (candidates[++i] === num);
    dfs(i, sum, [...res]);
  };

  dfs(0, 0, []);
  return resArr;
};