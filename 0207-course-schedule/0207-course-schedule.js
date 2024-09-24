/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // let graph = {}
    // for (let i = 0; i < numCourses; i++) {
    //     graph[i] = []
    // }
    // for (const [crs, pre] of prerequisites) {
    //     graph[crs].push(pre)
    // }

    let graph = new Map()
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, [])
    }
    for (let [pre, crs] of prerequisites) {
        graph.get(crs).push(pre)
    }
    //Visite SEt
    let visit = new Set()
    var again = function (crs) {
        if (visit.has(crs)) return false

        // checking map 
        visit.add(crs)
        //Now check every prerequisites using loop
        for (const pre of graph.get(crs)) {
            if (!again(pre)) return false
        }
        visit.delete(crs)
        graph.set(crs, [])
        return true
    }
    // now the condition is if every courses has no prerequisites then ?
    for (let crs = 0; crs < numCourses; crs++) {
        if (!again(crs)) return false
    } return true




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