/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function (piles, h) {
  let left = 1, right = Math.max(...piles);

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    const _h = piles.reduce((sumH, curH) => sumH + Math.ceil(curH / mid), 0);
    if (_h <= h) {
      right = mid;
    } else if (_h > h) {
      left = mid + 1;
    }
  }

  return left;
};