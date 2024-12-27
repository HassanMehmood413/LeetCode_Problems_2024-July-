/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let pq = new MinPriorityQueue(); // Create a MinPriorityQueue
    let arr = [];

    // Initialize the priority queue with the first `k` elements
    for (let i = 0; i < k; i++) {
        pq.enqueue(nums[i]); // Enqueue each element
    }

    // Process remaining elements
    for (let i = k; i < nums.length; i++) {
        if (nums[i] >= pq.front().element) { // Compare with the smallest element
            pq.dequeue(); // Remove the smallest element
            pq.enqueue(nums[i]); // Enqueue the current element
        }
    }

    // Collect elements from the priority queue
    while (!pq.isEmpty()) {
        arr.push(pq.dequeue().element); // Dequeue elements into an array
    }

    return arr[0]; // Return the array
};