/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {

    let graph = []
    for (let i = 0; i <= n; i++) {
        graph[i] = []
    }
    for (let [u, v, w] of times) {
        graph[u].push([v, w])
    }

    var min = function (n, visit, dict) {
        let mins = Infinity, index = -1
        for (let i = 1; i <= n; i++) {
            if (!visit[i] && dict[i] < mins) {
                mins = dict[i]
                index = i
            }
        }
        return index
    }
    let visit = new Array(n + 1).fill(false)
    let dict = new Array(n + 1).fill(Infinity)
    dict[k] = 0
    for (let i = 0; i < n; i++) {
        let key = min(n, visit, dict)
        if (key === -1) break;
        visit[key] = true

        for (let [neighbor, weight] of graph[key] || []) {
            if (!visit[neighbor] && dict[key] + weight < dict[neighbor]) {
                dict[neighbor] = dict[key] + weight
            }
        }
    }
    let max = Math.max(...dict.slice(1))
    return max === Infinity ? -1 : max
};