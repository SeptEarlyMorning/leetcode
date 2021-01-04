/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n <= 0) return true;

  flowerbed.push(0);
  for (let i = 0; i < flowerbed.length - 1; i += 2) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i + 1] === 0) {
        if (--n <= 0) return true;
      } else {
        ++i;
      }
    }
  }

  return false;
};