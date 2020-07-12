/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const m = dungeon[0].length, n = dungeon.length;
  const dp = new Array(m);
  dp[m - 1] = dungeon[n - 1][m - 1] < 0 ? Math.abs(dungeon[n - 1][m - 1] - 1) : 1;
  for (let j = m - 1; j > 0; j--) {
    const key = dp[j] - dungeon[n - 1][j - 1];
    dp[j - 1] = (key > 0 ? key : 1);
  }

  for (let i = n - 2; i >= 0; i--) {
    const key = dp[m - 1] - dungeon[i][m - 1];
    dp[m - 1] = (key > 0 ? key : 1);
    for (let j = m - 2; j >= 0; j--) {
      const key = Math.min(dp[j], dp[j + 1]) - dungeon[i][j];
      dp[j] = (key > 0 ? key : 1);
    }
  }
  return dp[0];
};