/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let pq = new MinPriorityQueue()
    let arr = []

    for (let i = 0; i < k; i++) {
        pq.enqueue(nums[i])
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] >= pq.front().element) {
            pq.dequeue()
            pq.enqueue(nums[i])
        }
    }
    while (!pq.isEmpty()) {
        arr.push(pq.dequeue().element)
    }
    return arr[0]
};