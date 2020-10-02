/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const strMap = new Map();
  let sum = 0;

  for (const s of S) {
    strMap.set(s, (strMap.get(s) || 0) + 1);
  }

  for (const j of J) {
    sum += (strMap.get(j) || 0)
  }

  return sum;
};