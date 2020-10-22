/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const last = {}, res = [];

  for (let i = 0; i < S.length; ++i) {
    last[S[i]] = i;
  }

  let start = 0, end = 0;

  for (let i = 0; i < S.length; ++i) {
    end = Math.max(end, last[S[i]]);
    if (end === i) {
      res.push(end - start + 1);
      start = end + 1;
    }
  }

  return res;
};