/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  let key = 0;
  while (i < j) {
    if (s[i] !== s[j]) {
      if (s[i + 1] !== s[j] && s[i] !== s[j - 1]) {
        return false;
      } else if (s[i] === s[j - 1] || s[i + 1] === s[j]) {
        key++;
      }
    }
    if (key === 2) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(validPalindrome("abca"));
