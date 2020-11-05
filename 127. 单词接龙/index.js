/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const queue = [beginWord], wordSet = new Set(wordList);
  let ladderLen = 1;

  while (queue.length) {
    let len = queue.length;
    while (len--) {
      const word = queue.shift();
      if (word === endWord) return ladderLen;
      for (let i = 0; i < word.length; ++i) {
        for (let c = 97; c <= 122; ++c) {
          const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
          if (wordSet.has(newWord)) {
            queue.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
    ++ladderLen;
  }

  return 0;
};