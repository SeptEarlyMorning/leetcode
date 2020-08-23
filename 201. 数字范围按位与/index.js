/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  /* 位移 */
  // let shift = 0;

  // while (m < n) {
  //   m >>= 1;
  //   n >>= 1;
  //   ++shift;
  // }

  // return m << shift;

  /* Brian Kernighan 算法 */
  while (m < n) {
    n &= (n - 1);
  }

  return n;
};