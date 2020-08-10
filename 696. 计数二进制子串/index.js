/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  /* 计算相邻相同的字符数量 */
  const len = s.length;
  let count = 0, preCount = 0, nowCount = 1;

  for (let i = 1; i <= len; ++i) {
    if (s.charAt(i) === s.charAt(i - 1)) {
      ++nowCount;
    } else {
      count += Math.min(preCount, nowCount);
      preCount = nowCount;
      nowCount = 1;
    }
  }

  return count;
};