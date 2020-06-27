/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  if (k > 3 * Math.pow(2, n - 1)) {
    return 'd';
  }
  // console.log(k % Math.pow(2, n - 1));
  let happyString = '';
  const words = ['a', 'b', 'c'];
  const len = words.length;
  // recursion(k, n);
  while (n > 0) {
    const key = Math.floor((k - 1) / Math.pow(2, n - 1));
    // console.log(key, 'key');

    if (happyString === '') {
      happyString += words[key % len];
    } else {
      const i = key % (len - 1);
      if (happyString[happyString.length - 1] === 'a') {
        happyString += words[i + 1];
      } else if (happyString[happyString.length - 1] === 'b') {
        happyString += words[i === 0 ? i : i + 1];
      } else {
        happyString += words[i];
      }
    }
    n--;
  }
  return happyString;
};

console.log(getHappyString(1, 3));
console.log(getHappyString(3, 9));
console.log(getHappyString(10, 100));