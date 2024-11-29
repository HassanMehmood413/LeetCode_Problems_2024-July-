
var StockSpanner = function () {
    this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let count = 1
    if (this.stack.length == 0) {
        this.stack.push([price, count])
        return count
    }
    else {
        let l = 1
        while (this.stack.length > 0 && price >= this.stack[this.stack.length - 1][0]) {
            count += this.stack.pop()[1]
        }
        this.stack.push([price, count])
        return count
    }
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */