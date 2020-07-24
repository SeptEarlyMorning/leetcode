/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  /* 数学方法 */
  // return N % 2 === 0;

  /* 动态规划 */
  const dp = new Array(N).fill(false);
  dp[1] = true;
  for (let i = 2; i < N; i++) {
    for (let j = 1; j < i; j++) {
      if ((i + 1) % j === 0 && dp[i - j] === false) {
        dp[i] = true;
        break;
      } else {
        dp[i] = false;
      }
    }
  }
  return dp[N - 1];
};