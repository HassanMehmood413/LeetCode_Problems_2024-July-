/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    let graph = []
    let n = points.length
    for (let i = 0; i < n; i++) {
        graph[i] = []
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const distance = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            graph[i].push([j, distance]);
            graph[j].push([i, distance]);
        }
    }


    let parent = new Array(n).fill(-1)
    let mst = new Array(n).fill(false)
    let key = new Array(n).fill(Infinity)

    key[0] = 0
    var minkey = function (key, mst, V) {
        let min = Infinity, index = -1
        for (let i = 0; i < V; i++) {
            if (!mst[i] && key[i] < min) {
                min = key[i]
                index = i
            }
        }
        return index
    }

    for (let i = 0; i < n - 1; i++) {
        let u = minkey(key, mst, n)

        mst[u] = true

        for (let [neighbor, weight] of graph[u]) {
            if (!mst[neighbor] && weight < key[neighbor]) {
                key[neighbor] = weight
                parent[neighbor] = u
            }
        }
    }

    let p = key.reduce((acc, dcc) => acc + dcc, 0)
    return p
};