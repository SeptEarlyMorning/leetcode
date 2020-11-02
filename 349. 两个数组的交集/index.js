/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  /* set */
  // const set1 = new Set(nums1), set2 = new Set(nums2), res = [];

  // for (const num of set1) {
  //   if (set2.has(num)) {
  //     res.push(num);
  //   }
  // }

  // return res;

  /* 排序 + 双指针 */
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let idx1 = 0, idx2 = 0;
  const res = [];

  while (idx1 < nums1.length && idx2 < nums2.length) {
    if (nums1[idx1] < nums2[idx2]) {
      ++idx1;
    } else if (nums1[idx1] > nums2[idx2]) {
      ++idx2;
    } else {
      res.push(nums1[idx1]);
      while (nums1[++idx1] === nums1[idx1 - 1]);
    }
  }

  return res;
};