/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  return new Set(map.values()).size === map.size;
};