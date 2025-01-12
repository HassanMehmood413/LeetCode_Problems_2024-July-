/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    }

    const pq = new MinPriorityQueue();
    for (let [arr, value] of map.entries()) {
        pq.enqueue(arr, value)
    }

    while (!pq.isEmpty() && k > 0) {
        let freq = pq.front().priority;
        if (freq <= k) {
            k -= freq;
            pq.dequeue();
        } else {
            break;
        }
    }
    return pq.size()
};