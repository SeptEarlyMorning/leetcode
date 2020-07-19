/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  /* 动态规划 */
  let len = nums.length;
  let arr = [1, ...nums, 1];
  const dp = Array.from({ length: len + 2 }, () => Array(len + 2).fill(0)); // 初始化二维数组

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 2; j <= len + 1; j++) {
      // n 表示最后一个戳破的气球而不是第一个要戳破的
      for (let n = i + 1; n < j; n++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][n] + dp[n][j] + arr[i] * arr[n] * arr[j]);
      }
    }
  }

  return dp[0][len + 1];
};