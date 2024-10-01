/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph = []
    for (let i = 0; i < numCourses; i++) {
        graph[i] = []
    }
    for (let [u, v] of prerequisites) {
        graph[u].push(v)
    }

    var bfs = function (graph, visit, start) {
        visit[start] = true
        stack[start] = true
        for (let neighbor of graph[start]) {
            if (!visit[neighbor]) {
                if (bfs(graph, visit, neighbor)) return true
            }
            else if(stack[neighbor]) return true
        }
        stack[start] = false
        return false
    }


    let visit = new Array(numCourses).fill(false)
    let stack = new Array(numCourses).fill(false)
    for (let i = 0; i < numCourses; i++) {
        if (!visit[i]) {
            if (bfs(graph, visit, i)) return false
        }
    }
    return true



    // Time Limit exceed
    // let graph = new Map()
    // var again = function (graph, node1, to) {
    //     if (!graph.has(node1)) {
    //         graph.set(node1, [])
    //     }
    //     graph.get(node1).push(to)
    // }

    // for (let i = 0; i < prerequisites.length; i++) {
    //     again(graph, prerequisites[i][0], prerequisites[i][1])
    // }
    // var visit = new Set()
    // var bfs = function (node) {
    //     if (visit.has(node)) return false
    //     visit.add(node)
    //     for (let neighbor of graph.get(node) || []) {
    //         if (!bfs(neighbor)) return false
    //     }
    //     visit.delete(node)
    //     return true
    // }



    // var connected = function (graph) {
    //     for (let node of graph.keys()) {
    //         if (!visit.has(node)) {
    //             if (!bfs(node)) return false
    //         }
    //     }
    //     return true
    // }
    // return connected(graph)

};