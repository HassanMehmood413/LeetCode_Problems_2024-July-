/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {


    // check Column
    let arr = []
    let arr2 = []
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            arr.push(matrix[j][i])
        }
        if (arr.includes(0)) {
            arr2.push(i)
        }
        arr = []
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].includes(0)) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = matrix[i][j] * 0
            }
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let a = arr2[0]
        if (i === a) {
            arr2.shift()
            for (let j = 0; j < matrix.length; j++) {
                matrix[j][i] = matrix[j][i] * 0
            }
        }
    }
    return matrix
};