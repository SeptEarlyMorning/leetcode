/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  /* 递归回溯 */
  const resArr = [];

  const dfs = (i, res) => {
    if (k - res.length > n - i + 1) return;
    if (res.length === k) {
      resArr.push(res);
      return;
    }
    dfs(i + 1, [...res, i]);
    dfs(i + 1, [...res]);
  };

  dfs(1, []);

  return resArr;
};