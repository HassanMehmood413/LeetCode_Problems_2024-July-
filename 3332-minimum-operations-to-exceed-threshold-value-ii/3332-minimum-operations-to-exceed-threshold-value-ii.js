/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let pq = new MinPriorityQueue();
    let operations = 0
    let i = 0;

    for (let num of nums) {
        pq.enqueue(num, num);
    }


    while (pq.size() > 1) {
        let first = pq.dequeue().element;
        if (first >= k) {
            break
        }
        let second = pq.dequeue().element
        let min = Math.min(first, second) * 2
        let newValue = min + Math.max(first, second)
        pq.enqueue(newValue, newValue)
        operations++

    }
    return operations
};