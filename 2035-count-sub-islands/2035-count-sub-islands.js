/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {

    var dfs = function (start, end, grid1, grid2) {
        let queue = []
        grid2[start][end] = 0
        queue.push([start, end])
        let is = true
        while (queue.length > 0) {
            let [first, second] = queue.shift()
            if (grid1[first][second] == 0) is = false
            for (let [i, j] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
                let x = first + i
                let y = second + j
                if (x >= 0 && y >= 0 && x < grid2.length && y < grid2[0].length && grid2[x][y] == 1) {
                    queue.push([x, y])
                    grid2[x][y] = 0
                }
            }
        }
        return is

    }


    let count = 0
    for (let i = 0; i < grid2.length; i++) {
        for (let j = 0; j < grid2[0].length; j++) {
            if (grid2[i][j] == 1) {
                if (dfs(i, j, grid1, grid2)) {
                    count++
                }
            }
        }
    }
    return count
};