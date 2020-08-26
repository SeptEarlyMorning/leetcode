/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const numLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }, arr = [], len = digits.length;

  const dfs = (i, j, numLetter, letter) => {
    if (i >= len) arr.push(letter);
    if (!numLetter || j >= numLetter.length) return;
    dfs(i + 1, 0, numLetters[digits.charAt(i + 1)], letter + numLetter.charAt(j));
    dfs(i, j + 1, numLetter, letter);
  };

  if (len > 0) {
    dfs(0, 0, numLetters[digits.charAt(0)], '');
  }
  return arr;
};