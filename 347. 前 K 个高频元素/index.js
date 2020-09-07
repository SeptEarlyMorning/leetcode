/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  /* 快排 */
  const numMap = new Map();
  for (const num of nums) {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  }

  const arr = [...numMap.keys()];

  const quickSort = (left, right) => {
    if (left >= right) return;
    const key = numMap.get(arr[left]), start = left, end = right;

    while (left < right) {
      while (left < right && numMap.get(arr[right]) <= key) {
        --right;
      }
      while (left < right && numMap.get(arr[left]) >= key) {
        ++left;
      }
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    [arr[start], arr[left]] = [arr[left], arr[start]];

    if (left < k) {
      quickSort(left + 1, end);
    } else if (left > k) {
      quickSort(start, left - 1);
    }
  };
  quickSort(0, arr.length - 1);
  return arr.slice(0, k);
};