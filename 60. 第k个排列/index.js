/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let num = '';
  const nums = Array.from({ length: n }, (v, i) => i + 1);
  for (let i = 0; i < n; ++i) {
    let key = 1;
    for (let j = 1; j < n - i; ++j) {
      key *= j;
    }
    const curNum = nums.splice(Math.ceil(k / key) - 1, 1)[0];
    num += curNum;
    k %= key;
  }
  return num;
};