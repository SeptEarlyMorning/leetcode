/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  /* 动态规划 */
  // const dp = [0];
  // let i = 1, maxLen = 0;
  // while (i < s.length) {
  //   if (s[i] === '(') {
  //     dp.push(0);
  //   } else {
  //     const left = i - dp[i - 1] - 1;
  //     if (s[left] === '(') {
  //       dp.push(2 + dp[i - 1] + (left === 0 ? 0 : dp[left - 1]));
  //       maxLen = Math.max(dp[i], maxLen);
  //     } else {
  //       dp.push(0);
  //     }
  //   }
  //   i++;
  // }
  // return maxLen;

  /* 栈 */
  // const stack = [-1];
  // let i = 0, maxLen = 0, len = 0;
  // while (i < s.length) {
  //   if (s[i] === '(') {
  //     stack.push(i);
  //   } else {
  //     stack.pop();
  //     if (stack.length === 0) {
  //       stack.push(i);
  //     } else {
  //       maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
  //     }
  //   }
  //   i++;
  // }
  // return maxLen;

  /* 正反遍历结合 */
  let left = 0, right = 0, maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
      if (left === right) {
        maxLen = Math.max(maxLen, left * 2);
      } else if (left < right) {
        left = right = 0;
      }
    }
  }
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left++;
      if (right === left) {
        maxLen = Math.max(maxLen, right * 2);
      } else if (right < left) {
        left = right = 0;
      }
    } else {
      right++;
    }
  }
  return maxLen;
};