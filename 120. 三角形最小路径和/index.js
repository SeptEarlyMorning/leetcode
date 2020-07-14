/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  /* 未优化的动态规划 */
  // const high = triangle.length;
  // const dp = new Array(high);
  // dp[0] = triangle[0];

  // for (let i = 1; i < high; i++) {
  //   const len = triangle[i].length;
  //   dp[i] = new Array(len);
  //   dp[i][0] = dp[i - 1][0] + triangle[i][0];
  //   for (let j = 1; j < len - 1; j++) {
  //     dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
  //   }
  //   dp[i][len - 1] = dp[i - 1][len - 2] + triangle[i][len - 1];
  // } 

  // return Math.min(...dp[high - 1]);

  /* 空间优化后的动态规划 */
  const high = triangle.length;
  const dp = new Array(high);
  dp[0] = triangle[0][0];

  for (let i = 1; i < high; i++) {
    let len = triangle[i].length - 1;
    dp[len] = dp[len - 1] + triangle[i][len];
    while (len-- > 1) {
      dp[len] = Math.min(dp[len], dp[len - 1]) + triangle[i][len];
    }
    dp[0] += triangle[i][0];
  }

  return Math.min(...dp);
};