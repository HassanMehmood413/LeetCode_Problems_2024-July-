/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    let indegree = new Array(numCourses).fill(Infinity)
    let graph = new Map()

    var again = function (graph, first, second) {
        if (!graph.has(first)) {
            graph.set(first, [])
        }
        graph.get(first).push(second)
    }

    for (let [u, v] of prerequisites) {
        again(graph, u, v)
    }
    console.log(graph)


    var dfs = function (first_val, second_val, graph, visit) {
        if (first_val == second_val) return true
        if (visit.has(first_val)) return false
        visit.add(first_val)

        for (let neighbor of graph.get(first_val) || []) {
            if (dfs(neighbor, second_val, graph, visit)) {
                return true
            }
        }
        visit.delete(second_val)
        return false
    }

    let res = []
    for (let [first, second] of queries) {
        let visit = new Set()
        let req = graph.get(first)
        if (!req) {
            res.push(false)
        }
        else if (dfs(first, second, graph, visit)) {
            res.push(true)
        }
        else {
            res.push(false)
        }
    }
    return res
};