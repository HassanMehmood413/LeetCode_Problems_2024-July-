/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let row = grid.length
    let visit = new Set()
    let col = grid[0].length
    let queue = []
    let count = 0


    var dfs = function (start, end) {
        if (start > row && end > col && start < 0 && end < 0 && grid[start][end] == '0') return
        while (queue.length > 0) {
            let [first, second] = queue.shift()
            for (let [x, y] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
                let newr = first + x
                let newy = second + y
                if (newr >= 0 && newy >= 0 && newr < row && newy < col && grid[newr][newy] == '1' && !visit.has(`${newr},${newy}`)) {
                    queue.push([newr, newy])
                    visit.add(`${newr},${newy}`)
                }
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == '1' && !visit.has(`${i},${j}`)) {
                queue.push([i, j])
                count++
                dfs(i, j)
            }
        }
    }
    return count
};