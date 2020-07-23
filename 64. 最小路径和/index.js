/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const n = grid.length, m = grid[0].length;

  /* 动态规划 */
  // const dp = Array.from({ length: n }, () => new Array(m));

  // dp[0][0] = grid[0][0];
  // for (let i = 1; i < m; i++) {
  //   dp[0][i] = dp[0][i - 1] + grid[0][i];
  // }
  // for (let i = 1; i < n; i++) {
  //   dp[i][0] = dp[i - 1][0] + grid[i][0];
  //   for (let j = 1; j < m; j++) {
  //     dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
  //   }
  // }

  // return dp[n - 1][m - 1];

  /* 动态规划 + 滚动数组 */
  const dp = [grid[0][0]];

  grid[0].reduce((total, val, i) => dp[i] = total + val);

  for (let i = 1; i < n; i++) {
    dp[0] += grid[i][0];
    for (let j = 1; j < m; j++) {
      dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1];
};