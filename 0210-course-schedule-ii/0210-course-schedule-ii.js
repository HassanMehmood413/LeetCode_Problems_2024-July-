/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let graph = new Map()
    let result = []
    let indegree = new Array(numCourses).fill(0)
    let queue = []
    var again = function (graph, first, second) {
        if (!graph.has(first)) {
            graph.set(first, [])
        }
        graph.get(first).push(second)
        indegree[second]++
    }

    for (let i = 0; i < prerequisites.length; i++) {
        again(graph, prerequisites[i][0], prerequisites[i][1])
    }


    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            queue.push(i)
        }
    }

    while (queue.length > 0) {
        let first = queue.shift()
        result.push(first)
        for (let neighbor of graph.get(first) || []) {
            indegree[neighbor]--
            if (indegree[neighbor] == 0) {
                queue.push(neighbor)
            }
        }
    }
    return result.length == numCourses ? result.reverse() : []
};