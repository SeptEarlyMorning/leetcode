/**
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function (leaves) {
  /* 动态规划 */
  // const len = leaves.length, dp = Array.from({ length: len }, () => new Array(3));

  // dp[0][0] = leaves[0] === 'r' ? 0 : 1;
  // dp[0][1] = dp[0][2] = dp[1][2] = Infinity;
  // for (let i = 1; i < len; ++i) {
  //   const isRed = leaves[i] === 'r';
  //   dp[i][0] = dp[i - 1][0] + !isRed;
  //   dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + isRed;
  //   if (i >= 2)
  //     dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][2]) + !isRed;
  // }

  // return dp[len - 1][2];

  /* 动态规划 + 状态压缩 */
  const len = leaves.length, dp = new Array(3);

  dp[0] = leaves[0] === 'r' ? 0 : 1;
  dp[1] = dp[2] = Infinity;
  for (let i = 1; i < len; ++i) {
    const isRed = leaves[i] === 'r';
    if (i >= 2) dp[2] = Math.min(dp[1], dp[2]) + !isRed;
    dp[1] = Math.min(dp[0], dp[1]) + isRed;
    dp[0] += !isRed;
  }

  return dp[2];
};