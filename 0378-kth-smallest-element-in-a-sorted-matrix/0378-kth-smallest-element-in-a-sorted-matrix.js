/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    // if you want to concat all the rows of matrix in one line then use 'matrix.flat()'
    let arr = []
    // for (let i = 0; i < matrix.length; i++) {
    //     arr = arr.concat(matrix[i])
    // }
    arr = matrix.flat()
    arr.sort((a, b) => a - b)
    return arr[k - 1]

};