/**
 * @param {number[]} prices
 * 
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }
  /* 动态规划，空间未优化 */
  // const dp = [[-prices[0], 0, 0]];

  // for (let i = 1; i < prices.length; i++) {
  //   dp.push([]);
  //   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
  //   dp[i][1] = Math.max(dp[i - 1][2], dp[i - 1][1]);
  //   dp[i][2] = dp[i - 1][0] + prices[i];
  // }

  // return Math.max(...dp.pop());

  /* 动态规划，空间优化 */
  let hold = -prices[0], noHeld = 0, freezingPeriod = 0;

  for (let i = 1; i < prices.length; i++) {
    const key = hold;
    hold = Math.max(hold, noHeld - prices[i]);
    noHeld = Math.max(noHeld, freezingPeriod);
    freezingPeriod = key + prices[i];
  }

  return Math.max(noHeld, freezingPeriod);
};