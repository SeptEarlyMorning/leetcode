/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
  /* 哈希表 */
  // const wordMap = new Map();
  // for (let i = 0; i < words.length; i++) {
  //   if (words[i] !== '') {
  //     wordMap.set(words[i], i);
  //   }
  // }

  // return wordMap.has(s) ? wordMap.get(s) : -1;

  /* js 自带 API */
  // return words.indexOf(s);

  /* 二分查找 */
  let left = 0, right = words.length - 1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    while (words[mid] === '') mid--;
    if (words[mid] === s) {
      return mid;
    } else if (words[mid] < s) {
      left = mid + 1;
      while (words[left] === '') left++;
    } else if (s < words[mid]) {
      right = mid - 1;
      while (words[right] === '') right--;
    }
  }

  return -1;
};