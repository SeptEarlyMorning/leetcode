/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  const len = A.length;
  let i = 0;

  while (i + 1 < len && A[i] < A[i + 1]) {
    i++;
  }

  if (i === 0 || i === len - 1) {
    return false;
  }

  while (i + 1 < len && A[i] > A[i + 1]) {
    i++;
  }

  return i === len - 1;
};