/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let nameIdx = 0, typedIdx = 0;

  while (nameIdx < name.length || typedIdx < typed.length) {
    if (name[nameIdx] === typed[typedIdx]) {
      ++nameIdx;
      ++typedIdx;
    } else if (typed[typedIdx] == typed[typedIdx - 1]) {
      ++typedIdx;
    } else {
      return false;
    }
  }

  return true;
};