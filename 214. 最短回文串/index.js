/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  /* 暴力法 */
  // const len = s.length;

  // for (let i = 0; i < len; ++i) {
  //   let left = 0, right = len - i - 1;
  //   while (left < right) {
  //     if (s.charAt(left) !== s.charAt(right)) {
  //       break;
  //     }
  //     ++left;
  //     --right;
  //   }
  //   if (left >= right) {
  //     return s.slice(len - i, len).split('').reverse().join('') + s;
  //   }
  // }

  // return s;

  /* KMP */
  const rev_s = s.split('').reverse().join('');
  const str = s + "#" + rev_s;
  const next = new Array(str.length).fill(0);
  // 抽出来，方便学习记忆，是固定的模板代码
  const kmp = (next, str) => {
    next[0] = 0;
    let len = 0;
    let i = 1;
    while (i < str.length) {
      if (str[i] == str[len]) {
        len++;
        next[i] = len;
        i++;
      } else {
        if (len == 0) {
          next[i] = 0;
          i++;
        } else {
          len = next[len - 1];
        }
      }
    }
  };
  kmp(next, str);
  const maxLen = next[str.length - 1]; // 最长回文前缀的长度
  const add = s.substring(maxLen).split('').reverse().join('');
  return add + s;
};