/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  /* dfs + 记忆优化 */
  if (matrix.length === 0) return 0;
  const n = matrix.length, m = matrix[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // 移动方向
  const dp = Array.from({ length: n }, () => new Array(m).fill(0));
  let max = 0;

  const dfs = (i, j, pre) => {
    if (i < 0 || i >= n || j < 0 || j >= m) return 0;
    if (matrix[i][j] <= pre) return 0;
    if (dp[i][j]) return dp[i][j];
    for (const direction of directions) { // 遍历四个反向
      dp[i][j] = Math.max(dp[i][j], dfs(i + direction[0], j + direction[1], matrix[i][j]) + 1);
    }

    return dp[i][j];
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      max = Math.max(max, dfs(i, j, -Infinity));
    }
  }

  return max;
};