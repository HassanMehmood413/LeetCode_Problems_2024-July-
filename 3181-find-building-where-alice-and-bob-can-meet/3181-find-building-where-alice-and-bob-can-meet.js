/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function (heights, queries) {
    const n = heights.length;
    const q = queries.length;

    const res = Array(q).fill(-1);
    const deferred = Array(n).fill().map(() => []);
    const pq = new MinPriorityQueue();

    queries.forEach(([a, b], idx) => {
        if (a === b) {
            res[idx] = a;
        } else if (a < b && heights[a] < heights[b]) {
            res[idx] = b;
        } else if (a > b && heights[a] > heights[b]) {
            res[idx] = a;
        } else {
            const maxH = Math.max(heights[a], heights[b]);
            const maxIdx = Math.max(a, b);
            deferred[maxIdx].push([maxH, idx]);
        }
    });

    for (let i = 0; i < n; ++i) {
        while (!pq.isEmpty() && pq.front().element[0] < heights[i]) {
            const { element } = pq.dequeue();
            res[element[1]] = i;
        }

        deferred[i].forEach(query =>
            pq.enqueue(query, query[0])
        );
    }

    return res;
}
