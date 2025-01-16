/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
    let pairs = nums2.map((val, ind) => [val, nums1[ind]])
    pairs.sort((a, b) => b[0] - a[0])
    let minQ = new MinPriorityQueue({ priority: x => x })
    let max = 0
    let minSum = 0

    for (let [n2, n1] of pairs) {
        minSum += n1
        minQ.enqueue(n1)

        if (minQ.size() > k) {
            let first = minQ.dequeue().element
            minSum -= first
        }
        if (minQ.size() == k) {
            max = Math.max(max, minSum * n2)
        }
    }
    return max
};