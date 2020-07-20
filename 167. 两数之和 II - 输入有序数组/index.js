/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 1, right = numbers.length;
  while (left < right) {
    const sum = numbers[left - 1] + numbers[right - 1];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left, right];
    }
  }
  return [-1, -1];
};