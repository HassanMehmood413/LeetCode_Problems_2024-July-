/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let graph = new Array(numCourses)
    for (let i = 0; i < numCourses; i++) {
        graph[i] = []
    }
    let indegree = new Array(numCourses).fill(0)
    let visit = new Array(numCourses).fill(false)
    let arr = []
    let queue = []
    for (let [pre, crs] of prerequisites) {
        graph[crs].push(pre)
        indegree[pre]++
    }

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            queue.push(i)
        }
    }

    while (queue.length > 0) {
        let first = queue.shift()
        arr.push(first)
        for (let neighbor of graph[first] || []) {
            indegree[neighbor]--
            if (indegree[neighbor] == 0) {
                queue.push(neighbor)
            }
        }
    }
    return arr.length == numCourses ? arr : []
};