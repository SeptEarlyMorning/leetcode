/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
  const arr = [0, 1];
  let maxNum = 0;

  for (let i = 0; i <= n >> 1; ++i) {
    arr[2 * i] = arr[i];
    if (2 * i + 1 <= n) {
      arr[2 * i + 1] = arr[i] + arr[i + 1];
      maxNum = Math.max(maxNum, arr[i] + arr[i + 1]);
    }
  }

  return maxNum
};