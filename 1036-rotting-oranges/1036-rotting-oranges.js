/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let fresh = 0
    let min = 0
    let x = 0
    let y = 0
    let queue = []

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == "2") {
                queue.push([r, c])
            }
            else if (grid[r][c] == "1") {
                fresh++
            }
        }
    }


    while (queue.length > 0 && fresh > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let [rows, cols] = queue.shift()

            for (let [row, col] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                x = row + rows
                y = col + cols
                if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] == "1") {
                    grid[x][y] = "2"
                    fresh--
                    queue.push([x, y])
                }
            }
        }
        min++
    }

    return fresh === 0 ? min : -1
};