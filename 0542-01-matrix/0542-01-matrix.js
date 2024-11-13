/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let queue = []
    let row = mat.length
    let col = mat[0].length
    let distance = new Array(row)
    for (let i = 0; i < row; i++) {
        distance[i] = new Array(col).fill(Infinity)
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (mat[i][j] == 0) {
                queue.push([i, j])
                distance[i][j] = 0
            }
        }
    }

    while (queue.length > 0) {
        let [first, second] = queue.shift()
        for (let [x, y] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
            let a = x + first
            let b = y + second

            if (a >= 0 && b >= 0 && a < row && b < col && distance[a][b] == Infinity) {
                queue.push([a, b])
                distance[a][b] = distance[first][second] + 1
            }
        }
    }
    return distance
};