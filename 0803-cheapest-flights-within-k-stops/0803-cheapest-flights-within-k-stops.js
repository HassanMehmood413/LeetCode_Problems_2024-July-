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
    let visit = new Array(n).fill(Infinity)
    visit[src] = 0
    for (let i = 0; i < n; i++) {
        graph[i] = []
    }

    for (let [u, v, w] of flights) {
        graph[u].push([v, w])
    }
    let queue = []
    queue.push([src, 0])
    k++
    while (k-- > 0 && queue.length > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let [neighbor, price] = queue.shift()
            if (graph[neighbor]) {
                for (let [news, newprice] of graph[neighbor]) {
                    newprice = price + newprice
                    if (newprice < visit[news]) {
                        visit[news] = newprice
                        queue.push([news, newprice])
                    }
                }
            }
        }
    }
    return visit[dst] === Infinity? -1 : visit[dst]
};