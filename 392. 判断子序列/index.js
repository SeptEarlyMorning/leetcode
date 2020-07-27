/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  /* 双指针 */
  let i = 0, j = 0;
  while (i < s.length && j < t.length) {
    if (s.charAt(i) === t.charAt(j)) {
      i++;
    }
    j++
  }
  return i === s.length;
};