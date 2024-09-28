/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {

    let x = 0
    let y = 0
    let max = 0
    let number = 0
    var bfs = function (i, j) {
        let queue = [[i, j]]
        grid[i][j] = 0
        number = 1
        while (queue.length > 0) {
            let [r, c] = queue.shift()
            for (let [rows, cols] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                x = rows + r
                y = cols + c

                if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] == "1") {
                    grid[x][y] = "0"
                    number++
                    queue.push([x, y])
                }
            }
        }
        return number
    }


    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == "1") {
                bfs(i, j)
                max = Math.max(max, number)
            }
        }

    }
    return max
};