/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const max = Math.pow(2, 31) - 1;
  let num = 0, isPositive = 1;

  str = str.trim();
  for (let i = 0; i < str.length; ++i) {
    const s = str.charAt(i);
    if (s < '0' || s > '9') {
      if (i === 0) {
        if (s === '-') {
          isPositive = -1;
          continue;
        }
        if (s === '+') {
          continue;
        }
      }
      break;
    }
    num *= 10;
    num += +s;
    if (isPositive * num >= max) return max;
    if (isPositive * num <= ~max) return ~max;
  }

  return isPositive * num;
};