/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  /* 镜面翻转，并在二进制数的最前端加 1 */
  const arr = [0];

  for (let i = 0; i < n; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      arr.push(arr[j] + (1 << i));
    }
  }

  return arr;
};