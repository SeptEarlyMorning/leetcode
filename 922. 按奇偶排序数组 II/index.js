/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  /* 暴力法 */
  // const odd = [], even = [], res = [];

  // for (const num of A) {
  //   num % 2 ? odd.push(num) : even.push(num);
  // }

  // for (let i = 0; i < A.length; ++i) {
  //   res.push(i % 2 ? odd.pop() : even.pop());
  // }

  // return res;

  /* 双指针 */
  const len = A.length;
  let evenIdx = 0, oddIdx = 1;

  while (true) {
    while (evenIdx < len && !(A[evenIdx] & 1)) evenIdx += 2;
    if (evenIdx >= len) break;
    while (oddIdx < len && A[oddIdx] & 1) oddIdx += 2;
    if (oddIdx >= len) break;
    [A[oddIdx], A[evenIdx]] = [A[evenIdx], A[oddIdx]];
  }

  return A;
};