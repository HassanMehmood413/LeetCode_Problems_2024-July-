/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let row = grid.length
    let col = grid[0].length
    let visit = new Set()
    let max = 0
    let queue = []

    var dfs = function (start, end) {
        visit.add(`${start},${end}`)
        let count = 1
        queue.push([start, end])
        while (queue.length > 0) {
            let [first, second] = queue.shift()
            for (let [r, c] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
                let x = first + r
                let y = second + c
                if (x >= 0 && y >= 0 && x < row && y < col && grid[x][y] == 1 && !visit.has(`${x},${y}`)) {
                    queue.push([x, y])
                    count++
                    visit.add(`${x},${y}`)
                }
            }
        }
        max = Math.max(count, max)
    }



    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1 && !visit.has(`${i},${j}`)) {
                dfs(i, j)
            }
        }
    }
    return max
};