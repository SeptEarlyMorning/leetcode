/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) return n;
  let pre = 0, cur = 1;

  for (let i = 2; i <= n; ++i) {
    cur += pre;
    pre = cur - pre;
  }

  return cur;
};