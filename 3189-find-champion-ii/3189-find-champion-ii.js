/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
    let indegree = new Array(n).fill(0)
    let graph = []

    var again = function (graph, node1, node2) {
        if (!graph[node1]) {
            graph[node1] = []
        }
        graph[node1].push(node2)
        indegree[node2]++
    }

    for (let i = 0; i < edges.length; i++) {
        again(graph, edges[i][0], edges[i][1])
    }

    let queue = []
    let ans = []
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0) {
            queue.push(i)
            ans.push(i)
        }
    }



    let res = []
    while (queue.length > 0) {
        let first = queue.shift()
        res.push(first)
        for (let neighbor of graph[first] || []) {
            indegree[neighbor]--
            if (indegree[neighbor] == 0) {
                queue.push(neighbor)
            }
        }

    }
    if (ans.length > 1) {
        return -1
    }
    else {
        return res[0]
    }

};