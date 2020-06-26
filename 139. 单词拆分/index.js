/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordDictSet = new Set(wordDict);
  const left = [0];
  const len = s.length;
  let leftLen = left.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < leftLen; j++) {
      if (wordDictSet.has(s.slice(left[j], i + 1))) {
        left[leftLen++] = i + 1;
        break;
      }
    }
  }
  return left[leftLen - 1] === len;
  // return a(s, wordDictSet, len - 1, len);
};

// 递归写法 未优化，超时
const a = (s, wordDictSet, i, j) => {
  if (s === '') {
    return true;
  } else if (i === 0) {
    return wordDictSet.has(s.slice(i, j));
  } else {
    console.log(s, i, 222);
    if (wordDictSet.has(s.slice(i, j))) {
      return a(s, wordDictSet, i - 1, i) || a(s, wordDictSet, i - 1, j);
    }
    return a(s, wordDictSet, i - 1, j);
  }
};

console.log(wordBreak("applepenapple", ["apple", "pen"]));
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak("aaaaaaaaaaaaaaaaaabaaaa", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaaaaa", "aaaaaaaaaa"]));
// console.log(wordBreak("aaaaaaaaaaaaaaaaaabaaaa", []));