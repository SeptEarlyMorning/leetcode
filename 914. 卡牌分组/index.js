/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX1 = function (deck) {
  deck.sort((a, b) => a - b);
  let a = new Map()
  const noRepeatDeck = [...new Set(deck)];
  if (noRepeatDeck.length === 1 && deck.length >= 2) {
    return true;
  }
  for (let i = 2; i <= deck.length / noRepeatDeck.length; i++) {
    for (let j = 0; j < noRepeatDeck.length; j++) {
      if ((deck.lastIndexOf(noRepeatDeck[j]) - deck.indexOf(noRepeatDeck[j]) + 1) % i !== 0) {
        break;
      }
      if (j === noRepeatDeck.length - 1) {
        return true;
      }
    }
  }
  return false;
};

var hasGroupsSizeX2 = function (deck) {
  let map = new Map();
  deck.map(item => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  });
  console.log(map.values());
  
  deck = [...map.values()]
}

let findGcb = (a, b) => {
  let num;
  while ((num = a % b) !== 0) {
    a = b;
    b = num;
  }
  return b;
};
// findGcb(25, 1);
console.log(hasGroupsSizeX1([1, 2, 3, 4, 4, 3, 2, 1]));
// console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
// console.log(hasGroupsSizeX([1]));
// console.log(hasGroupsSizeX([1, 1]));
// console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]));
// console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]));
// console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]));
