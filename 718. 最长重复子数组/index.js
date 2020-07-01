/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  const dp = [];
  let maxLen = 0;
  for (let i = 0; i < A.length; i++) {
    dp.push([]);
    for (let j = 0; j < B.length; j++) {
      dp[i].push(A[i] === B[j] ? ((i === 0 || j === 0) ? 0 : dp[i - 1][j - 1]) + 1 : 0);
      maxLen = Math.max(maxLen, dp[i][j]);
    }
  }
  return maxLen;
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));