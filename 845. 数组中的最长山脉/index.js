/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
  const len = A.length;
  let preFoot = -1, foot = 1, longestLen = 0, up = false;

  while (foot < len) {
    if (A[foot] > A[foot - 1]) {
      if (!up) {
        up = true;
        preFoot = foot - 1;
      }
    } else if (A[foot] < A[foot - 1]) {
      if (up) {
        up = false;
      }
    } else {
      up = false;
      preFoot = -1;
    }
    if (preFoot !== -1 && !up) {
      longestLen = Math.max(longestLen, foot - preFoot + 1);
    }
    ++foot;
  }

  return longestLen;
};