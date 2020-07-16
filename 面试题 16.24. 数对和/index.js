/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function (nums, target) {
  /* 先排序，再利用双指针 */
  // nums.sort((a, b) => a - b);
  // let left = 0, right = nums.length - 1;
  // const arr = [];

  // while (left < right) {
  //   if (nums[left] < target - nums[right]) {
  //     left++;
  //   } else if (nums[right] > target - nums[left]) {
  //     right--;
  //   } else {
  //     arr.push([nums[left], nums[right]]);
  //     left++;
  //     right--;
  //   }
  // }

  // return arr;

  /* 哈希表 */
  const numsMap = new Map(), arr = [];

  for (const num of nums) {
    numsMap.set(num, numsMap.has(num) ? numsMap.get(num) + 1 : 1);
  }

  for (const [key, value] of numsMap) {
    const count = target - key;
    if (count === key) {
      let times = Math.floor(value / 2);
      while (times--) {
        arr.push([key, key]);
      }
    } else if (numsMap.has(count)) {
      let times = value < numsMap.get(count) ? value : numsMap.get(count);
      while (times--) {
        arr.push([key, count]);
      }
      numsMap.delete(count);
    }
  }

  return arr;
};