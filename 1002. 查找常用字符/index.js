/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  /* 哈希表 */
  // const res = [];

  // let strMap = new Map();
  // for (const c of A[0]) {
  //   strMap.set(c, (strMap.get(c) || 0) + 1);
  // }

  // for (let i = 1; i < A.length; ++i) {
  //   const strMapKey = new Map();
  //   for (const c of A[i]) {
  //     if (strMap.has(c) && strMap.get(c) > (strMapKey.get(c) || 0)) {
  //       strMapKey.set(c, (strMapKey.get(c) || 0) + 1);
  //     }
  //   }
  //   strMap = strMapKey;
  // }

  // for (const [key, val] of strMap) {
  //   for (let i = 0; i < val; ++i) {
  //     res.push(key);
  //   }
  // }

  // return res;

  /* 遍历删除 */
  const str_1 = A[0], res = [];

  for (const c of str_1) {
    if (A.every(str => str.includes(c))) {
      A = A.map(str => str.replace(c, ''));
      res.push(c);
    }
  }

  return res;
};