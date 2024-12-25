/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let heap = new MaxPriorityQueue()
    for (let stone of stones) { 
        heap.enqueue(stone, stone); 
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