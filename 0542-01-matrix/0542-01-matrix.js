/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let rows = mat.length
    let cols = mat[0].length
    let distance = new Array(rows)
    let queue = []
    for (let i = 0; i < rows; i++) {
        distance[i] = new Array(cols).fill(Infinity)
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] == 0) {
                queue.push([i, j])
                distance[i][j] = 0
            }
        }
    }

    while (queue.length > 0) {
        let [r, c] = queue.shift()
        for (let [row, col] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            let x = r + row
            let y = c + col

            if (x >= 0 && y >= 0 && x < rows && y < cols && distance[x][y] == Infinity) {
                queue.push([x, y])
                distance[x][y] = distance[r][c] + 1
            }
        }
    }
    return distance
};