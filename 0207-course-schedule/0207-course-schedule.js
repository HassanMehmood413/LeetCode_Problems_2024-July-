/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph = new Map()

    var again = function (node1, node2, graph) {
        if (!graph.has(node1)) {
            graph.set(node1, [])
        }
        graph.get(node1).push(node2)
    }

    for (let i = 0; i < prerequisites.length; i++) {
        again(prerequisites[i][0], prerequisites[i][1], graph)
    }

    let visit = new Array(numCourses).fill(false)
    let restack = new Array(numCourses).fill(false)

    var dfs = function (node) {
        if (restack[node]) return false
        if (visit[node]) return true


        visit[node] = true
        restack[node] = true


        for (let neighbor of graph.get(node) || []) {
            if (!dfs(neighbor)) {
                return false
            }
        }
        restack[node] = false
        return true
    }


    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false
        }
    }
    return true
};