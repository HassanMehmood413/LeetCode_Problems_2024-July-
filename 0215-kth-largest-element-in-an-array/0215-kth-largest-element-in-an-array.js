class minPriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value) {
        let left = 0;
        let right = this.heap.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.heap[mid] < value) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        this.heap.splice(left, 0, value)
    }

    dequeue() {
        if (this.heap.length === 0) return null;
        return this.heap.shift();
    }

    front() {
        return this.heap[0] !== undefined ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let pq = new minPriorityQueue()
    for (let i = 0; i < k; i++) {
        pq.enqueue(nums[i])
    }
    let arr = []
    for (let i = pq.size(); i < nums.length; i++) {
        if (nums[i] >= pq.front()) {
            let a = pq.dequeue()
            pq.enqueue(nums[i])
        }
    }
    return pq.front()

};