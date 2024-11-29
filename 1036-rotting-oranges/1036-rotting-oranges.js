/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let queue = []
    let fresh = 0
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j])
            }
            else if (grid[i][j] == 1) {
                fresh++
            }
        }
    }
    while (queue.length > 0 && fresh > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let [first, second] = queue.shift()
            for (let [x, y] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
                let a = x + first
                let b = y + second

                if (a >= 0 && b >= 0 && a < grid.length && b < grid[0].length && grid[a][b] == 1) {
                    grid[a][b] = 0
                    queue.push([a, b])
                    fresh--
                }
            }
        }
        count++
    }


    return fresh == 0 ? count : -1
};