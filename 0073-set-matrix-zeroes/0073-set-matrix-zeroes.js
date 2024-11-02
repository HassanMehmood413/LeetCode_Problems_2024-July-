/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    // check columns 
    let columns = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                columns.push(j)
            }
        }
    }
    console.log(columns)
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].includes(0)) {
            matrix[i].fill(0)
        }
    }

    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][columns[i]] = 0

        }
    }
    return matrix
};