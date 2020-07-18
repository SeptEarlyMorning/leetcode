/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const s1Len = s1.length, s2Len = s2.length, s3Len = s3.length;
  if (s1Len + s2Len !== s3Len) return false;

  /* DFS + 记忆优化 */
  // const memoryArr = new Array(s1Len + 1);
  // for (let i = 0; i < s1Len + 1; i++) {
  //   memoryArr[i] = new Array(s2Len + 1);
  // }

  // const dfs = (i1, i2, i3) => {
  //   if (memoryArr[i1][i2] !== undefined) return memoryArr[i1][i2];
  //   if (i3 === s3Len) {
  //     return memoryArr[i1][i2] = true;
  //   }

  //   let isValid = false;
  //   if (i1 < s1Len && s1[i1] === s3[i3]) {
  //     isValid = dfs(i1 + 1, i2, i3 + 1);
  //   }
  //   if (i2 < s2Len && s2[i2] === s3[i3]) {
  //     isValid = isValid || dfs(i1, i2 + 1, i3 + 1);
  //   }
  //   return memoryArr[i1][i2] = isValid;
  // };

  // return dfs(0, 0, 0);

  /* 动态规划 */
  // const dp = [[true]];

  // for (let i = 0; i < s2Len; i++) {
  //   dp[0][i + 1] = dp[0][i] && s2[i] === s3[i];
  // }

  // for (let i = 0; i < s1Len; i++) {
  //   dp[i + 1] = [];
  //   dp[i + 1][0] = dp[i][0] && s1[i] === s3[i];
  //   for (let j = 0; j < s2Len; j++) {
  //     if (!dp[i + 1][j] && !dp[i][j + 1]) {
  //       dp[i + 1][j + 1] = false;
  //     } else if (dp[i + 1][j]) {
  //       dp[i + 1][j + 1] = s2[j] === s3[i + 1 + j];
  //     } else if (dp[i][j + 1]) {
  //       dp[i + 1][j + 1] = s1[i] === s3[i + j + 1];
  //     }
  //   }
  // }

  // return dp[s1Len][s2Len];

  /* 动态规划 + 滚动数组 */
  const dp = new Array(s2Len + 1).fill(true);

  for (let i = 0; i < s1Len + 1; i++) {
    for (let j = 0; j < s2Len + 1; j++) {
      dp[j] = (dp[j] && s1.charAt(i - 1) === s3.charAt(i + j - 1))
        || (dp[j - 1] === true && s2.charAt(j - 1) === s3.charAt(i + j - 1));
    }
  }

  return dp[s2Len];
};