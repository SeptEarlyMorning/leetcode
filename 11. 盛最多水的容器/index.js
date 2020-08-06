/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0, right = height.length - 1, maxAreaNum = 0;

  while (left < right) {
    maxAreaNum = Math.max((right - left) * Math.min(height[left], height[right]), maxAreaNum);
    if (height[left] < height[right]) {
      ++left;
    } else {
      --right;
    }
  }

  return maxAreaNum;
};