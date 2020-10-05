/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length, resArr = [];
  if (len < 4) return resArr;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 3; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (nums[i] + nums[len - 3] +
      nums[len - 2] + nums[len - 1] < target) continue;

    for (let j = i + 1; j < len - 2; ++j) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) continue;

      let left = j + 1, right = len - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left];
        if (sum + nums[left + 1] > target) break;
        sum += nums[right];
        if (sum < target) {
          ++left;
        } else if (sum > target) {
          --right;
        } else {
          resArr.push([nums[i], nums[j], nums[left], nums[right]]);
          let preLeft = left, preRight = right;
          while (nums[++left] === nums[preLeft] && left < right);
          while (nums[--right] === nums[preRight] && left < right);
        }
      }
    }
  }

  return resArr;
};