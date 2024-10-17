/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
    let row = grid1.length
    let col = grid1[0].length
    let count = 0
    var bfs = function (start, end, grid1, grid2) {
        let queue = []
        let issub = true
        queue.push([start, end])
        while (queue.length > 0) {
            let [first, second] = queue.shift()
            if (grid1[first][second] == 0) {
                issub = false
            }
            grid2[first][second] = 0

            for (let [a, b] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                let x = a + first
                let y = b + second

                if (x >= 0 && y >= 0 && x < row && y < col && grid2[x][y] == 1) {
                    queue.push([x, y])
                    grid2[x][y] = 0
                }
            }
        }
        return issub
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid2[i][j] == 1) {
                if (bfs(i, j, grid1, grid2)) {
                    count++
                }
            }
        }
    }
    return count
};