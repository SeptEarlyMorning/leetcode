/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  /* 暴力 */
  // if (n < 1) return false;

  // while (n > 1) {
  //   if ((n % 2) !== 0) {
  //     return false;
  //   }
  //   n /= 2;
  // }

  // return true;

  /* 位运算1 */
  // return n > 0 && (n & -n) === n;

  /* 位运算2 */
  return n > 0 && !(n & n - 1);
};