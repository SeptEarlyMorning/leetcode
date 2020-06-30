/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  /* 位运算法 */
  let mark = 0;
  for (let i = 0; i < astr.length; i++) {
    let num = 1 << astr[i].charCodeAt();
    if ((mark & num) !== 0) {
      return false;
    } else {
      mark |= num;
    }
  }
  return true;

  /* 暴力法 */
  // for (let i = 0; i < astr.length; i++) {
  //   for (let j = i + 1; j < astr.length; j++) {
  //     if (astr[i] === astr[j]) {
  //       return false;
  //     }
  //   }
  // }
  // return true;

  /* 利用了 es6 新增的 Set 数据结构 */
  // return new Set(astr).size === astr.length;
};