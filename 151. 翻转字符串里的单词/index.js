/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let splitArray = s.split(/\s+/);
  let flipS = '';
  for (let i = splitArray.length - 1; i >= 0; i--) {
    flipS += (splitArray[i] + ' ');
  }
  return flipS.trim();
};