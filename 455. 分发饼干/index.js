/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  /* 排序 + 贪心 */
  let gIdx = g.length, sIdx = s.length, res = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  while (gIdx && sIdx) {
    if (s[--sIdx] >= g[--gIdx]) {
      ++res;
    } else {
      ++sIdx;
    }
  }

  return res;
};