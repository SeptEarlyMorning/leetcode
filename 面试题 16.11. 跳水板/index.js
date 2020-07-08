/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k === 0) {
    return [];
  }
  if (shorter === longer) {
    return [longer * k];
  }
  const arr = [];
  for (let i = 0; i <= k; i++) {
    arr.push(longer * i + shorter * (k - i));
  }
  return arr;
};