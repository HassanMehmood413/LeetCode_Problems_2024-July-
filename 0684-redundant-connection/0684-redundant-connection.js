/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let parent = new Array(edges.length + 1)
    let rank = new Array(edges.length + 1).fill(0)
    for (let i = 1; i <= edges.length; i++) {
        parent[i] = i
    }


    var findpath = function (x, parent) {
        if (parent[x] != x) {
            parent[x] = findpath(parent[x], parent)
        }
        return parent[x]
    }

    var union = function (x, y, parent, rank) {
        let rankx = findpath(x, parent)
        let ranky = findpath(y, parent)

        if (rankx !== ranky) {
            if (rank[rankx] > rank[ranky]) {
                parent[ranky] = rankx
            }
            else if (rank[rankx] < rank[ranky]) {
                parent[rankx] = ranky
            }
            else {
                parent[rankx] = ranky
                rank[ranky]++
            }
            return true
        }
        return false
    }
    for (let [a, b] of edges) {
        if (!union(a, b, parent, rank)) {
            return [a, b]
        }
    }
    return []
};