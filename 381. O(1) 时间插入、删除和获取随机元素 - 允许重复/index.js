/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.valueMap = new Map();
  this.value = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  let key = false;
  if (!this.valueMap.has(val)) {
    this.valueMap.set(val, new Set());
    key = true;
  }
  this.valueMap.get(val).add(this.value.length);
  this.value.push(val);
  return key;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.valueMap.has(val)) return false;
  const reValIdx = this.valueMap.get(val).values().next().value;
  const swapVal = this.value[this.value.length - 1];
  this.value[reValIdx] = swapVal;
  this.value.pop();
  this.valueMap.get(val).delete(reValIdx);
  !this.valueMap.get(val).size && this.valueMap.delete(val);
  this.valueMap.get(swapVal)?.delete(this.value.length);
  this.valueMap.get(swapVal)?.add(reValIdx);
  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return this.value[~~(Math.random() * this.value.length)];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */