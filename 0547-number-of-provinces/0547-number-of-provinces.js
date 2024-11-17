/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    var dfs = function (start, visit) {
        visit[start] = true
        let index = 0
        for (let neighbor of isConnected[start]) {
            if (neighbor == 1 && !visit[index]) {
                dfs(index, visit)
            }
            index++
        }
    }


    let count = 0
    let visit = new Array(isConnected.length).fill(false)
    for (let i = 0; i < isConnected.length; i++) {
        if (!visit[i]) {
            count++
            dfs(i, visit)
        }
    }
    return count


};