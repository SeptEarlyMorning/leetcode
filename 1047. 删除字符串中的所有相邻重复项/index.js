/**
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
  const stack = [''];
  for (const c of S) {
    if (c === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
};