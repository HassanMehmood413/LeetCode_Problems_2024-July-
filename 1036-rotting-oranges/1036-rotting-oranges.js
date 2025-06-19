/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let rows = grid.length
    let cols = grid[0].length
    let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    let queue = []
    let count = 0
    let fresh = 0

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] == 2) {
                queue.push([r, c])
            }
            else if (grid[r][c] == 1) {
                fresh++
            }
        }
    }

    while (queue.length > 0 && fresh > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let [first, second] = queue.shift()
            for (let [row, col] of directions) {
                let newr = row + first
                let newc = col + second

                if (newr >= 0 && newr < rows && newc < grid[0].length && newr < grid.length && grid[newr][newc] == 1) {
                    queue.push([newr,newc])
                    grid[newr][newc] = 0
                    fresh--
                }
            }
        }
        count++
    }
    return fresh == 0 ? count : -1

};