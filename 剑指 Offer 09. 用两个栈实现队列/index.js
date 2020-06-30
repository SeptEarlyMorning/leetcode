var CQueue = function () {
  this.stack_1 = [];
  this.stack_2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack_1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.stack_2.length) {
    if (!this.stack_1.length) {
      return -1;
    } else {
      while (this.stack_1.length) {
        this.stack_2.push(this.stack_1.pop());
      }
    }
  }
  return this.stack_2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

const obj = new CQueue();
for (let i = 0; i < 10; i++) {
  obj.appendTail(i);
}
for (let i = 0; i < 5; i++) {
  console.log(obj.deleteHead());
}
for (let i = 10; i < 20; i++) {
  obj.appendTail(i);
}
for (let i = 0; i < 15; i++) {
  console.log(obj.deleteHead());
}

