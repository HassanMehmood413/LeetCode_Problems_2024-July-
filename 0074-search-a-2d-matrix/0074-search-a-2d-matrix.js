/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let array = []
    for (let i = 0; i < matrix.length; i++) {
        array = array.concat(matrix[i])
    }
    console.log(array)
    array = array.sort((a, b) => a - b)
    if (array.includes(target)) {
        return true
    }
    return false
};