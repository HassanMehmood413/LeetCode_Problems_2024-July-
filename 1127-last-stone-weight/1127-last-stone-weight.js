/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let heap = new MaxPriorityQueue()
    for (let stone of stones) { // Use "for...of" for values
        heap.enqueue(stone, stone); // Assuming the value of the stone is its priority
    }
    let arr = []
    while (heap.size() > 1) {
        let first = heap.dequeue().element
        let second = heap.dequeue().element


        if (first !== second) {
            heap.enqueue(first - second, first - second)
        }
    }
    return heap.isEmpty() ? 0 : heap.dequeue().element
};