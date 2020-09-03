/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  /* 防止溢出 */
  const MAX = Math.pow(2, 31) - 1;
  let res = 0;

  while (x != 0) {
    res = res * 10 + x % 10;
    x = ~~(x / 10);
    if (res >= ~~(MAX / 10) || res <= ~~((~MAX) / 10)) {
      if (x > MAX % 10 || x < ~MAX % 10) return 0;
      if (res > ~~(MAX / 10) || res < ~~((~MAX) / 10)) {
        if (x > 0 || x < 0) return 0;
      }
    }
  }

  return res;
};