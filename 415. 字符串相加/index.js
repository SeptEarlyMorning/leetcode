/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1, j = num2.length - 1, add = 0, sum = [];

  while (i >= 0 || j >= 0 || add) {
    const m = i < 0 ? 0 : num1.charAt(i) - '0';
    const n = j < 0 ? 0 : num2.charAt(j) - '0';

    sum.push((m + n + add) % 10);
    add = Math.floor((m + n + add) / 10);
    --i;
    --j;
  }

  return sum.reverse().join('');
};