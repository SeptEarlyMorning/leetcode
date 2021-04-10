/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
  if (n < 1) return false;

  const factors = [2, 3, 5];
  for (const factor of factors) {
    while (!(n % factor)) {
      n /= factor;
    }
  }

  return n === 1;
};