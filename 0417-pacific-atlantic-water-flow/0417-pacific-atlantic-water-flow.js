/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let rows = heights.length
    let cols = heights[0].length
    let pacific = new Set()
    let atlantic = new Set()

    var dfs = function (start, end, visit) {
        let key = `${start},${end}`
        visit.add(key)

        for (let [r, c] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            let x = r + start
            let y = c + end
            if (x >= 0 && y >= 0 && x < rows && y < cols && heights[x][y] >= heights[start][end] && !visit.has(`${x},${y}`)) {
                dfs(x, y, visit)
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        dfs(i,0, pacific)
        dfs(i, cols - 1, atlantic)
    }
    for (let j = 0; j < cols; j++) {
        dfs(0,j, pacific)
        dfs(rows - 1, j, atlantic)
    }

    let result = []

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let key = `${i},${j}`
            if (pacific.has(key) && atlantic.has(key)) {
                result.push([i, j])
            }
        }
    }
    return result





};