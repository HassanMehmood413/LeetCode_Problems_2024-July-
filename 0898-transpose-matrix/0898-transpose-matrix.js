/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let columns = matrix[0].length
    let rows = matrix.length
    let arr = []
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            arr.push(matrix[j][i])
        }
    }
    let result = []
    size = rows
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result

};