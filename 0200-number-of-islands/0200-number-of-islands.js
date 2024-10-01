/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    var bfs = function (i, j) {
        let queue = [[i, j]]
        while (queue.length > 0) {
            let length = queue.length
            for (let i = 0; i < length; i++) {
                let [row, col] = queue.shift()
                for (let [r, c] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                    let x = r + row
                    let y = c + col
                    if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] == "1") {
                        grid[x][y] = "0"
                        queue.push([x, y])
                    }
                }
            }
        }
    }



    let number = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == "1") {
                number++
                bfs(i, j)
            }
        }
    }
    return number
}

