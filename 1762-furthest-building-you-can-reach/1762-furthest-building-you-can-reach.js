/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    let index = 0
    let minheap = new MinPriorityQueue()
    while ((index < heights.length - 1)) {
        let h_diff = heights[index + 1] - heights[index]
        if (h_diff > 0) {
            minheap.enqueue(h_diff, h_diff)
            if (minheap.size() > ladders) {
                let first = minheap.dequeue().element
                bricks -= first

            }
            if (bricks < 0) {
                return index
            }
        }
        index++
    }
    return index
};