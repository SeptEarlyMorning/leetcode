/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  /* 排序形成一个新数组，时间复杂度 O(m+n)，不符合题目要求 */
  // const arr = [], len1 = nums1.length, len2 = nums2.length, len = len1 + len2;
  // let i = 0, j = 0;

  // while (i < len1 && j < len2) {
  //   if (nums1[i] < nums2[j]) {
  //     arr.push(nums1[i]);
  //     ++i;
  //   } else {
  //     arr.push(nums2[j]);
  //     ++j;
  //   }
  // }
  // while (i < len1) {
  //   arr.push(nums1[i]);
  //   ++i;
  // }
  // while (j < len2) {
  //   arr.push(nums2[j]);
  //   ++j;
  // }

  // return len % 2 ? arr[len >> 1] : (arr[len >> 1] + arr[(len >> 1) - 1]) / 2;

  /* 二分查找 */
  const len1 = nums1.length, len2 = nums2.length, len = len1 + len2, midLen = len >> 1;
  if (len1 > len2) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let left = 0, right = len1;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (nums2[midLen - mid - 1] > nums1[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  right = midLen - left;
  const len1Left = left === 0 ? -Infinity : nums1[left - 1],
    len1Right = left === len1 ? Infinity : nums1[left],
    len2Left = right === 0 ? -Infinity : nums2[right - 1],
    len2Rigth = right === len2 ? Infinity : nums2[right];
  return len % 2 ? Math.min(len1Right, len2Rigth) : (Math.max(len1Left, len2Left) + Math.min(len1Right, len2Rigth)) / 2;
};