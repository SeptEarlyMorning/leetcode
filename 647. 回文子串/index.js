/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const len = s.length;
  let num = 0;

  /* 分开写 */
  // for (let i = 0; i < len; ++i) { // 奇数个回文串
  //   let left = i, right = i;
  //   while (left >= 0 && right < len && s.charAt(left--) === s.charAt(right++)) {
  //     ++num;
  //   }
  // }

  // for (let i = 0; i < len - 1; ++i) { // 偶数个回文串
  //   let left = i, right = i + 1;
  //   while (left >= 0 && right < len && s.charAt(left--) === s.charAt(right++)) {
  //     ++num;
  //   }
  // }

  /* 将奇数和偶数合并写 */
  for (let i = 0; i < len * 2 - 1; ++i) {
    let left = i >> 1, right = left + i % 2;
    while (left >= 0 && right < len && s.charAt(left--) === s.charAt(right++)) {
      ++num;
    }
  }

  return num;
};