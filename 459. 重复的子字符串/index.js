/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  /* 暴力法 */
  // const len = s.length;
  // let i = len;

  // while (i > 1) {
  //   if(!(len % i)) {
  //     const n = len / i;
  //     if (s === s.slice(n, len) + s.slice(0, n)) return true;
  //   }
  //   --i;
  // }

  // return false;

  /* 双字符串 */
  return (s + s).slice(1, -1).includes(s);
};