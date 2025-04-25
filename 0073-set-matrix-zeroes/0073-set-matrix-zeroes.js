/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    // for rows
    let col = []
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].includes(0)) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0) {
                    col.push(j)
                }
                matrix[i][j] = 0
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j of col) {
            matrix[i][j] = 0
        }
    }
    return matrix

};