/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let collect_ed = []
    let minheap = new MinPriorityQueue()
    for (let i = 0; i < points.length; i++) {
        let a = points[i][0]
        let b = points[i][1]
        // Calculate ed distance
        let ed = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
        minheap.enqueue(points[i], ed)
    }

    while (k !== 0) {
        let el = minheap.dequeue()
        collect_ed.push(el.element)
        k--
    }
    return collect_ed
};