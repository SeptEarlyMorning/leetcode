/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  let maxScoreAdd = 0;
  let maxScore = A[0] + 0;
  for (let i = 1; i < A.length; i++) {
    maxScoreAdd = Math.max(maxScoreAdd, A[i - 1] + i - 1);
    maxScore = Math.max(maxScore, maxScoreAdd + A[i] - i);
  }
  return maxScore;
};

// console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
