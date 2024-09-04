
var MinStack = function () {
    this.stack = [];
    this.minstack = [];
};

MinStack.prototype.push = function (val) {
    this.stack.push(val)
    if (this.minstack.length == 0 || this.minstack[this.minstack.length - 1] >= val) {
        this.minstack.push(val)
    }
};

MinStack.prototype.pop = function () {
    if (this.stack.pop() == this.minstack[this.minstack.length - 1]) {
        this.minstack.pop()
    }

};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function () {
    return this.minstack[this.minstack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */