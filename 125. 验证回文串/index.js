/**
 * @param {string} s
 * @return {boolean}
 */
// 方法一 翻转
/* var isPalindrome = function (s) {
  s = s.toLowerCase().replace(//\W|_//g,'');
  return s === s.split('').reverse().join('');
}; */

// 方法二 对比
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/\W|_/g, '');
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));