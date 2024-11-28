
var MyQueue = function () {
    this.s1 = []
    this.s2 = []

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    while (this.s1.length !== 0) {
        let a = this.s1.pop()
        this.s2.push(a)
    }
    this.s1.push(x)
    while (this.s2.length !== 0) {
        let b = this.s2.pop()
        this.s1.push(b)
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return this.s1.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.s1[this.s1.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.s1.length !== 0) {
        return false
    }
    return true
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */