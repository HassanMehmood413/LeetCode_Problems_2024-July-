
var MyStack = function () {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.stack.length > 0) {
        let a = this.stack.pop()
        return a
    }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    if (this.stack.length == 0) {
        return true
    }
    return false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */