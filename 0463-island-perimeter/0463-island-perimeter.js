/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let visit = new Set()
    let count = 0
    var bfs = function (start, end) {
        let queue = [[start, end]]
        visit.add(`${start},${end}`)
        while (queue.length > 0) {
            let [first, second] = queue.shift()
            for (let [x, y] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                let a = x + first
                let b = y + second

                if (a >= 0 && b >= 0 && a < grid.length && b < grid[0].length && grid[a][b] == 1 && !visit.has(`${a},${b}`)) {
                    queue.push([a, b])
                    visit.add(`${a},${b}`)
                }

                if (a < 0 || b < 0 || a >= grid.length || b >= grid[0].length || grid[a][b] == 0) {
                    count++;
                }

            }
        }
    }


    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1 && !visit.has(`${i},${j}`)) {
                bfs(i, j)
            }
        }
    }
    return count
};