/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n < 4) return n - 1;
  if (n === 4) return n;

  let result = 1;
  const max = 1e9 + 7;

  while (n > 4) {
    result = (result * 3) % max;
    n -= 3;
  }

  return (result * n) % max;
};