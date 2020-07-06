/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  let dp = [1, 2, 4];
  if (n < 4) {
    return dp[n - 1];
  }
  for (let i = 4; i <= n; i++) {
    /* 用 js 方法来写，会慢点但是一行搞定 */
    // dp.push(((dp.shift() + dp[0]) % 1000000007 + dp[1]) % 1000000007);
    const temp = (dp[0] + dp[1]) % 1000000007 + dp[2];
    dp[0] = dp[1];
    dp[1] = dp[2];
    dp[2] = temp % 1000000007;
  }
  return dp[2];
};