/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const len = nums.length;
  const dp = Array.from({ length: len }, () => new Array(len).fill(0));

  dp[0][0] = nums[0];
  for (let i = 1; i < len; ++i) {
    dp[i][i] = nums[i];
    dp[i][i - 1] = Math.abs(dp[i][i] - dp[i - 1][i - 1]);
    for (let j = i - 2; j >= 0; --j) {
      dp[i][j] = Math.max(nums[i] - dp[i - 1][j], nums[j] - dp[i][j + 1]);
    }
  }

  return dp[len - 1][0] >= 0;
};