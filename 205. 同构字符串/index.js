/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sMap = {}, tMap = {};

  for (let i = 0; i < s.length; ++i) {
    const sWord = s[i], tWord = t[i];
    if (sMap[sWord] || tMap[tWord]) {
      if (sMap[sWord] !== tWord || sWord !== tMap[tWord]) {
        return false;
      }
    }
    sMap[sWord] = tWord;
    tMap[tWord] = sWord;
  }

  return true;
};