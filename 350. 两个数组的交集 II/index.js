/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length < nums2.length) { // 可以优化当其中一个数组长度远小于另一个数组时的情况
    return intersect(nums2, nums1);
  }

  /* 利用哈希表 */
  // const nums1Map = new Map(), arr = [];
  // for (const num of nums1) {
  //   nums1Map.set(num, nums1Map.has(num) ? nums1Map.get(num) + 1 : 1);
  // }

  // for (const num of nums2) {
  //   if (nums1Map.size === 0) {
  //     break;
  //   }
  //   if (nums1Map.has(num)) {
  //     arr.push(num);
  //     nums1Map.set(num, nums1Map.get(num) - 1);
  //     if (!nums1Map.get(num)) {
  //       nums1Map.delete(num);
  //     }
  //   }
  // }
  // return arr;

  /* 先排序,在查找 */
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0, j = 0;
  const arr = [];
  while (j < nums2.length && i < nums1.length) {
    if (nums2[j] === nums1[i]) {
      arr.push(nums2[j]);
      j++;
      i++;
    } else if (nums2[j] > nums1[i]) {
      i++;
    } else {
      j++;
    }
  }
  return arr;
}; 