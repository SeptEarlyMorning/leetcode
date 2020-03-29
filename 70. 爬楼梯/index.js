/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let f = 0, g = 1;
  while (0 < n--) {
      f = (g += f) - f;
  }
  return g;
};