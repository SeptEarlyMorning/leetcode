/**
 * @param {number} cap
 */
var StackOfPlates = function (cap) {
  this.cap = cap;
  this.stackArr = [[]];
};

/** 
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function (val) {
  const length = this.stackArr.length;
  if (this.cap > 0) {
    if (length && this.stackArr[length - 1].length < this.cap) {
      this.stackArr[length - 1].push(val);
    } else {
      this.stackArr.push([val]);
    }
  }
};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function () {
  const length = this.stackArr.length;
  if (length && this.stackArr[length - 1].length > 1) {
    return this.stackArr[length - 1].pop();
  } else if (length && this.stackArr[length - 1].length === 1) {
    return this.stackArr.pop().pop();
  }
  return -1;
};

/** 
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function (index) {
  if (index < this.stackArr.length && index >= 0) {
    if (this.stackArr[index].length > 1) {
      return this.stackArr[index].pop();
    } else if (this.stackArr[index].length === 1) {
      return this.stackArr.splice(index, 1).pop().pop();
    }
  }
  return -1;
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */