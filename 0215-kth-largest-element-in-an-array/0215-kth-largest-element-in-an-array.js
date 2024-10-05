class minPriorityQueue {
    constructor() {
        this.heap = [];
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }
    getLeftChildIndex(i) {
        return 2 * i + 1
    }
    getRightChildIndex(i) {
        return 2 * i + 2
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    enqueue(value) {
        this.heap.push(value)
        this.heapifyup()
    }
    heapifyup() {
        let index = this.heap.length - 1
        while (index > 0) {
            let parentindex = this.getParentIndex(index)
            if (this.heap[parentindex] > this.heap[index]) {
                this.swap(parentindex, index)
                index = parentindex
            }
            else {
                break
            }
        }
    }
    dequeue() {
        if (this.heap.length === 0) return null;
        if (this.heap.length == 1) return this.heap.pop()
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
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
        if (pq.size() > k) {
            pq.dequeue()
        }
    }
    for (let i = pq.size(); i < nums.length; i++) {
        if (nums[i] >= pq.front()) {
            let a = pq.dequeue()
            pq.enqueue(nums[i])
        }
    }
    return pq.front()

};