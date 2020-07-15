/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  /* 动态规划 */
  // const dp = new Array(n + 1).fill(0);
  // dp[0] = 1;

  // for (let i = 1; i <= n; i++) {
  //   for (let j = 1; j <= i; j++) {
  //     dp[i] += (dp[i - j] * dp[j - 1]);
  //   }
  // }
  // return dp[n];

  /* 卡特兰(Catalan)数 */
  let pre = 1;

  for (let i = 0; i < n; i++) {
    pre *= ((4 * i + 2) / (i + 2));
  }
  return pre;
};