/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) { // i从1开始到len
    for (let j = i; j >= 0; j--) { // j从和i重合，向左，到开端
      const word = s.slice(j, i);  // 获取[j,i-1]子串word
      if (wordSet.has(word) && dp[j] == true) {//word是单词表的单词，且左侧子串[0,j-1]的dp[j]为真
        dp[i] = true; // 共同决定了当前长度为i的子串的dp项为真
        break; // i长度的子串已经满足要求，不需要j继续划分子串
      }
    }
  }
  return dp[s.length];
};
var wordBreak = function (s, wordDict) {
  if (wordDict.length === 0) {
    return false;
  }
  const wordDictSet = new Set(wordDict);
  console.log(wordDictSet);
  // console.log(s.slice(s.length - 2, s.length));
  
  // return a(s, wordDictSet, s.length - 1, s.length);
};

const a = (s, wordDictSet, i, j) => {
  // console.log(i);
  
  if (s === '') {
    // console.log(s, 111111);
    
    return true;
  } else if (i === 0) {
    // console.log(s, 222222);
    // console.log(s.replace(reg, '') === '');
    return wordDictSet.has(s.slice(i, j));
  } else {
    // console.log(s, i, 222);
    
    // return a(s.);
  }
};

console.log(wordBreak("applepenapple", ["apple", "pen"]));

// const reg = new RegExp('ab', 'g');
// console.log('abababb'.replace(reg, ''));
