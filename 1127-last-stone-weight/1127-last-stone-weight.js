

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let pq = new MaxPriorityQueue()
    for (let i = 0; i < stones.length; i++) {
        pq.enqueue(stones[i])
    }
    while (pq.size() > 1) {
        let x = pq.dequeue().element
        let y = pq.dequeue().element
        if (x != y) {
            pq.enqueue(x - y)
        }

    } return pq.size() === 0 ? 0 : pq.front().element


}