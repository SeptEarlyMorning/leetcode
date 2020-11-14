/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const countMap = {}, res = [];

  for (const num of arr1) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (const num of arr2) {
    res.push(...Array(countMap[num]).fill(num));
    delete countMap[num];
  }

  // js 中 obj 会自动排序
  Object.keys(countMap).forEach(num => {
    res.push(...Array(countMap[num]).fill(num));
  });

  return res;
};