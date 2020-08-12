/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  /* 从后往前双指针 */
  let i = m + n, j = m - 1, k = n - 1;

  while (k >= 0 && j >= 0) {
    nums1[--i] = nums1[j] < nums2[k] ? nums2[k--] : nums1[j--]
  }

  nums1.splice(0, k + 1, ...nums2.slice(0, k + 1));
};