/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  const wordCount = new Array(26).fill(0), ACODE = 97;

  for (const c of s) {
    ++wordCount[c.charCodeAt() - ACODE];
  }

  let res = '', i = 0;
  while (res.length < s.length) {
    while (res.length < s.length && i < 26) {
      if (wordCount[i]) {
        res += String.fromCharCode(i + ACODE);
        --wordCount[i];
      }
      ++i;
    }
    while (res.length < s.length && i--) {
      if (wordCount[i]) {
        res += String.fromCharCode(i + ACODE);
        --wordCount[i];
      }
    }
  }

  return res;
};