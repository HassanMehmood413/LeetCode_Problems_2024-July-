/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    // [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9]
    // ]

    // 1,1
    // 1,2 -> 2.1
    // 1.3 -> 3.1

    // 1.2 -> 2.1
    // 2.2 -> 2.2
    // 2.3 -> 3.2


    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
        matrix[i] = matrix[i].reverse()
    }
    return matrix

};