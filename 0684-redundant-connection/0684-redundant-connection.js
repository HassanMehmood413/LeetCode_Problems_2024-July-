/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    
    var find = function (x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    var union = function (x, y) {
        let rootx = find(x)
        let rooty = find(y)

        if (rootx == rooty) return false
        if (rank[rootx] > rank[rooty]) {
            parent[rooty] = rootx
        }
        else if (rank[rootx] < rank[rooty]) {
            parent[rootx] = rooty
        }
        else {
            parent[rooty] = rootx
            rank[rootx]++
        }
        return true
    }


    let n = edges.length
    let parent = []
    let rank = []
    for (let i = 0; i < n; i++) {
        parent[i] = i
        rank[i] = 0
    }

    for (let [u, v] of edges) {
        if (!union(u, v)) {
            return [u, v]
        }
    }
};