/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let cur = 0;
  return A.map(value => {
    cur = ((cur << 1) + value) % 5;
    return cur === 0;
  });
};