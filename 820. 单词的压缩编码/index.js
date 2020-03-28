/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  words.sort((a, b) => a.length - b.length);
  for (let i = 0; i < words.length; i++) {
    let j = words.length - 1;
    while (j > i) {
      if (words[j].lastIndexOf(words[i]) === words[j].length - words[i].length) {
        words.splice(i, 1);
        i--;
        break;
      }
      j--;
    }
  }
  return words.toString().length + 1;
};

var minimumLengthEncoding = function (words) {
  let setWords = new Set(words);
  for (const word of setWords) {
    for (let i = 1; i < word.length; i++){
      let target = word.slice(i);
      setWords.has(target) && setWords.delete(target);
    }
  }
  let len = 0;
  setWords.forEach(word => len += word.length + 1);
  return len;
};