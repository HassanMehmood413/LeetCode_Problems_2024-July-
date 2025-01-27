/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    // Using DFS 
    // let graph = new Map()

    // var again = function (graph, first, second) {
    //     if (!graph.has(first)) {
    //         graph.set(first, [])
    //     }
    //     graph.get(first).push(second)
    // }

    // for (let [u, v] of prerequisites) {
    //     again(graph, u, v)
    // }

    // var dfs = function (first_val, second_val, graph, visit) {
    //     if (first_val == second_val) return true
    //     if (visit.has(first_val)) return false
    //     visit.add(first_val)

    //     for (let neighbor of graph.get(first_val) || []) {
    //         if (dfs(neighbor, second_val, graph, visit)) {
    //             return true
    //         }
    //     }
    //     visit.delete(second_val)
    //     return false
    // }

    // let res = []
    // for (let [first, second] of queries) {
    //     let visit = new Set()
    //     let req = graph.get(first)
    //     if (!req) {
    //         res.push(false)
    //     }
    //     else if (dfs(first, second, graph, visit)) {
    //         res.push(true)
    //     }
    //     else {
    //         res.push(false)
    //     }
    // }
    // return res

    // Using Floyd Warshall Algorithm
    let reach = Array.from({ length: numCourses }, () => new Array(numCourses).fill(false))

    for (let [u, v] of prerequisites) {
        reach[u][v] = true
    }

    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                if (reach[i][k] && reach[k][j]) {
                    reach[i][j] = true
                }
            }
        }
    }
    return queries.map(([first, second]) => reach[first][second])
};