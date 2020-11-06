/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => bitsCount(a) - bitsCount(b) || a - b);
  return arr;
};

const bitsCount = (num) => {
  let count = 0;
  while (num) {
    num &= (num - 1);
    ++count;
  }
  return count;
};