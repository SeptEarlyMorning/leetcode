/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const resArr = [];

  const dfs = (i, sum, res) => {
    if (i > 9 || res.length >= k) return;
    const nowSum = i + sum;
    if (nowSum === n && res.length === k - 1) {
      resArr.push([...res, i]);
      return;
    } else if (nowSum < n) {
      dfs(i + 1, nowSum, [...res, i]);
    }
    dfs(i + 1, sum, [...res]);
  }

  /* 标准回溯 */
  const backtracking = (i, sum, res) => {
    if (res.length === k) {
      if (sum === n) {
        resArr.push([...res]);
      }
      return;
    }

    for (let j = i; j <= 9; ++j) {
      res.push(j);
      backtracking(j + 1, sum + j, res);
      res.pop();
    }
  };

  // dfs(1, 0, []);
  backtracking(1, 0, []);

  return resArr;
};