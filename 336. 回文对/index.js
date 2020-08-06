/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const len = words.length, palindromePairsArr = [];

  /* 暴力法 */
  // for (let i = 0; i < len; ++i) {
  //   let j = i + 1;

  //   while (j < len) {
  //     if (isPalindrome(words[i] + words[j])) {
  //       palindromePairsArr.push([i, j]);
  //     }
  //     if (isPalindrome(words[j] + words[i])) {
  //       palindromePairsArr.push([j, i]);
  //     }
  //     ++j;
  //   }
  // }

  // return palindromePairsArr;

  /* 哈希表，找前缀及后缀 */
  const map = new Map();

  for (let i = 0; i < len; ++i) {
    const key = words[i].split('').reverse().join('');
    map.set(key, i);
  }

  for (let i = 0; i < len; ++i) {
    const word = words[i], wordLen = word.length;
    for (let j = 0; j <= wordLen; ++j) {
      if (isPalindrome(word.slice(j, wordLen))) {
        const wordKey = word.slice(0, j);
        if (map.has(wordKey) && i !== map.get(wordKey)) {
          palindromePairsArr.push([i, map.get(wordKey)]);
        }
      }
      if (j !== 0 && isPalindrome(word.slice(0, j))) {
        const wordKey = word.slice(j, wordLen);
        if (map.has(wordKey) && i !== map.get(wordKey)) {
          palindromePairsArr.push([map.get(wordKey), i]);
        }
      }
    }
  }

  return palindromePairsArr;
};

const isPalindrome = (word) => {
  let left = 0, right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    ++left;
    --right;
  }

  return true;
};