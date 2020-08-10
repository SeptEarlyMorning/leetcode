/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  /* 动态规划 + 滚动数组 */
  const dp = new Array(m).fill(1);

  for (let i = 1; i < n; ++i) {
    for (let j = 1; j < m; ++j) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[m - 1];
};