/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let max = 0
    let visit = new Set()
    var bfs = function (start, end) {
        visit.add(`${start},${end}`)
        let count = 1
        let queue = [[start, end]]
        while (queue.length > 0) {
            let [first, second] = queue.shift()
            for (let [x, y] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
                let a = x + first
                let b = y + second
                if (a >= 0 && b >= 0 && a < grid.length && b < grid[0].length && grid[a][b] == 1 && !visit.has(`${a},${b}`)) {
                    queue.push([a, b])
                    count++
                    visit.add(`${a},${b}`)
                }
            }
        }
        max = Math.max(count, max)

    }



    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1 && !visit.has(`${i},${j}`)) {
                bfs(i, j)
            }
        }
    }
    return max
};