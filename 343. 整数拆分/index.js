/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  /* 数学方法 */
  if (n < 4) {
    return n - 1;
  }
  if (n % 3 === 1) return Math.pow(3, Math.floor(n / 3) - 1) * 4;
  if (n % 3 === 0) return Math.pow(3, Math.floor(n / 3));
  return Math.pow(3, Math.floor(n / 3)) * 2;
};