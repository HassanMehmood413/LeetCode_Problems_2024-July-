/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    var dfs = function (start, visit) {
        visit[start] = true
        let neighborindex = 0
        for (let neighbor of isConnected[start]) {
            if (neighbor == 1 && !visit[neighborindex]) {
                dfs(neighborindex, visit)
            }
            neighborindex++
        }
    }

    let provience = 0
    let visit = new Array(isConnected.length).fill(false)
    for (let i = 0; i < isConnected.length; i++) {
        if (!visit[i]) {
            provience++
            dfs(i, visit)
        }
    }
    return provience
};