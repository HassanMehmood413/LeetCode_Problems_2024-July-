/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let graph = []
    for (let i = 0; i < n; i++) {
        graph[i] = []
    }
    for (let [u, v, w] of flights) {
        graph[u].push([v, w])
    }

    let dist = new Array(n).fill(Infinity)
    dist[src] = 0

    let queue = [[src, 0, 0]]
    while (queue.length > 0) {
        let [node, cost, stops] = queue.shift()

        if (stops > k) continue

        for (let [neighbor, weight] of graph[node]) {
            let newcost = weight + cost
            if (newcost < dist[neighbor] && stops <= k) {
                dist[neighbor] = newcost
                queue.push([neighbor, newcost, stops + 1])
            }
        }
    }
    return dist[dst] == Infinity ? -1 : dist[dst]
};