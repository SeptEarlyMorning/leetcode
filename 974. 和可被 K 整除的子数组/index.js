/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  const map = new Map();
  let sum = 0, nums = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    let m = ((sum % K) + K) % K;

    if (map.has(m)) {
      nums += map.get(m);
      map.set(m, map.get(m) + 1);
    } else {
      map.set(m, 1);
    }
  }

  map.get(0) && (nums += map.get(0));
  return nums;
};