/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const dp = [[true]];
  let key = true;
  let sLen = s.length, pLen = p.length;

  for (let i = 0; i < sLen; i++) {
    dp[0].push(false);
  }
  for (let i = 0; i < pLen; i++) {
    if (p[i] === '*' && key) {
      dp.push([true]);
    } else {
      dp.push([false]);
      key = false;
    }
  }

  for (let i = 1; i <= pLen; i++) {
    for (let j = 1; j <= sLen; j++) {
      if (p[i - 1] === s[j - 1] || p[i - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[i - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[pLen][sLen];
};