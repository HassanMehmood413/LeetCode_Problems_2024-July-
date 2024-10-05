/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    let graph = new Map()

    var again = function (graph, node1, node2) {
        if (!graph.has(node1)) {
            graph.set(node1, [])
        }
        graph.get(node1).push(node2)

    }

    for (let i = 0; i < tickets.length; i++) {
        again(graph, tickets[i][0], tickets[i][1])
    }

    for (let [from, to] of graph) {
        to.sort()
    }

    let arr = []
    var dfs = function (el) {
        let a = graph.get(el) || []
        while (a.length > 0) {
            let first = a.shift()
            dfs(first)
        }
        arr.push(el)
    }
    dfs("JFK")
    return arr.reverse()
};