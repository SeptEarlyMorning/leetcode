var SortedStack = function () {
  this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  const stackStore = [];
  while (!this.isEmpty() && this.stack[this.stack.length - 1] < val) {
    stackStore.push(this.stack.pop());
  }
  this.stack.push(val);
  while (stackStore.length) {
    this.stack.push(stackStore.pop());
  }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  !this.isEmpty() && this.stack.pop();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  return this.isEmpty() ? -1 : this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.stack.length ? false : true;
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */