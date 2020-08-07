/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;

  /* 暴力法 */
  // let i = len;

  // while (i--) {
  //   for (let j = 0; j < len - i; ++j) {
  //     if (isPalindrome(s.slice(j, j + i + 1))) {
  //       return s.slice(j, j + i + 1);
  //     }
  //   }
  // }

  // return '';

  /* 动态规划 */
  // const dp = Array.from({ length: len }, () => new Array(len).fill(true));
  // let longestPalindromeStr = s.charAt(0);

  // for (let i = 1; i < len; ++i) {
  //   for (let j = 0; j < i; ++j) {
  //     if (dp[i - 1][j + 1]) {
  //       if (s.charAt(j) === s.charAt(i)) {
  //         if (i - j > longestPalindromeStr.length - 1) {
  //           longestPalindromeStr = s.slice(j, i + 1);
  //         }
  //       } else {
  //         dp[i][j] = false;
  //       }
  //     } else {
  //       dp[i][j] = false;
  //     }
  //   }
  // }

  // return longestPalindromeStr;

  /* 动态规划 + 滚动数组 */
  const dp = new Array(len).fill(true);
  let longestPalindromeStr = s.charAt(0);

  for (let i = 1; i < len; ++i) {
    for (let j = 0; j < i; ++j) {
      if (dp[j + 1] && s.charAt(j) === s.charAt(i)) {
        dp[j] = true;
        if (i - j > longestPalindromeStr.length - 1) {
          longestPalindromeStr = s.slice(j, i + 1);
        }
      } else {
        dp[j] = false;
      }
    }
  }

  return longestPalindromeStr;
};

const isPalindrome = (str) => {
  let left = 0, right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) return false;
    ++left;
    --right;
  }

  return true;
};