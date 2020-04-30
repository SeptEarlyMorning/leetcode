/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();

  while (!set.has(n)) {
    set.add(n)
    let sum = 0;
    do {
      sum += Math.pow(n % 10, 2)
    } while (n = Math.floor(n / 10));
    n = sum;
  }
  return n === 1;
};
