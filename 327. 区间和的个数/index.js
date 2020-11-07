/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  /* 暴力法 */
  // let countSum = 0;

  // for (let i = 0; i < nums.length; ++i) {
  //   let sum = 0;
  //   for (let j = i; j < nums.length; ++j) {
  //     sum += nums[j];
  //     if (sum >= lower && sum <= upper) {
  //       ++countSum;
  //     }
  //   }
  // }

  // return countSum;

  /* 归并排序 + 前序和 */
  const preSum = [];

  const mergeSort = (lo, hi) => {
    if (hi - lo < 2) {
      if (preSum[lo] >= lower && preSum[lo] <= upper) return 1;
      return 0;
    }
    const mi = lo + ((hi - lo) >> 1);
    return mergeSort(lo, mi) + mergeSort(mi, hi) + merge(lo, mi, hi);
  };

  const merge = (lo, mi, hi) => {
    const bufferArr = preSum.slice(lo, mi);
    let countSum = 0;
    for (let i = mi; i < hi; ++i) {
      for (let j = lo; j < mi; ++j) {
        const sum = preSum[i] - preSum[j];
        if (sum < lower) break;
        sum <= upper && ++countSum;
      }
    }
    for (let i = 0; i < bufferArr.length; ++lo) {
      if (mi >= hi || bufferArr[i] <= preSum[mi]) {
        preSum[lo] = bufferArr[i++];
      } else {
        preSum[lo] = preSum[mi++];
      }
    }
    return countSum;
  };

  nums.reduce((sum, num) => {
    sum += num;
    preSum.push(sum);
    return sum;
  }, 0);

  return mergeSort(0, preSum.length);
};