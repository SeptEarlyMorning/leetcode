/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = -1, right = s.length;

  while (++left < --right) {
    // const item = s[left];
    // s[left] = s[right];
    // s[right] = item;

    [s[left], s[right]] = [s[right], s[left]];
  }
};