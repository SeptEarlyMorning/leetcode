/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  /* 动态规划 */
  // const n = nums.length;
  // const dp = Array.from({ length: m }, () => new Array(n).fill(Infinity));

  // dp[0][0] = nums[0];
  // for (let i = 1; i < n; i++) {
  //   dp[0][i] = nums[i] + dp[0][i - 1];
  // }

  // for (let i = 1; i < m; i++) {
  //   for (let j = i; j < n; j++) {
  //     for (let k = j - 1; k >= i - 1; k--) {
  //       dp[i][j] = Math.min(dp[i][j], Math.max(dp[i - 1][k], dp[0][j] - dp[0][k]));
  //     }
  //   }
  // }

  // return dp[m - 1][n - 1];

  /* 二分查找 */
  let left = Math.max(...nums), right = nums.reduce((total, val) => total + val);

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    let sum = 0, block = 1;

    for (const num of nums) {
      sum += num;
      if (sum > mid) {
        sum = num;
        block++;
      }
    }

    if (block > m) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};