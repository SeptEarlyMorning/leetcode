/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let i = 0, key = n;

  while (key > 0) {
    n = key;
    key -= Math.pow(10, i) * 9 * (i + 1);
    i++;
  }

  let mod = n % i;
  n = Math.ceil(n / i);
  return +String(Math.pow(10, i - 1) - 1 + n)[(mod + i - 1) % i];
};