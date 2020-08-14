/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  /* 使用哈希表 */
  const strMap = new Map();

  for (let i = 0; i < s.length; ++i) {
    strMap.set(s.charAt(i), strMap.has(s.charAt(i)) ? strMap.get(s.charAt(i)) + 1 : 1);
  }

  for (let i = 0; i < s.length; ++i) {
    if (strMap.get(s.charAt(i)) === 1) {
      return i;
    }
  }

  return -1;

  /* 暴力法 */
  // for (let i = 0; i < s.length; ++i) {
  //   let j = 0;
  //   while (j < s.length) {
  //     if (j !== i && s.charAt(j) === s.charAt(i)) {
  //       break;
  //     }
  //     ++j;
  //   }
  //   if (j >= s.length) {
  //     return i;
  //   }
  // }

  // return -1;

  /* Set */
  // const strSet = new Set(s.split(''));

  // for (const str of strSet) {
  //   let count = 0, index;
  //   for (let i = 0; i < s.length; ++i) {
  //     if (str === s.charAt(i)) {
  //       ++count;
  //       index = i;
  //     }
  //   }
  //   if (count === 1) {
  //     return index;
  //   }
  // }

  // return -1;
};