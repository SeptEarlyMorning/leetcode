/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  /* 暴力法 */
  // for (let i = 1; i < numbers.length; i++) {
  //   if (numbers[0] > numbers[i]) {
  //     return numbers[i];
  //   }
  // }
  // return numbers[0];

  /* 二分法 */
  let left = 0, right = numbers.length - 1;

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (numbers[mid] < numbers[right]) {
      right = mid;
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      right--;
    }
  }
  return numbers[left];
};