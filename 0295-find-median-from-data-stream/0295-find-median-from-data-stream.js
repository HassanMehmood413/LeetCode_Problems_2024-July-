
var MedianFinder = function () {
    this.low = new MaxPriorityQueue()
    this.high = new MinPriorityQueue()

};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.low.isEmpty() || this.low.front().element >= num) {
        this.low.enqueue(num)
    }
    else {
        this.high.enqueue(num)
    }


    if (this.low.size() > this.high.size() + 1) {
        this.high.enqueue(this.low.dequeue().element)
    }
    else {
        if (this.high.size() > this.low.size()) {
            this.low.enqueue(this.high.dequeue().element)
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.low.size() > this.high.size()) {
        return this.low.front().element
    }
    else {
        return (this.low.front().element + this.high.front().element) / 2
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */