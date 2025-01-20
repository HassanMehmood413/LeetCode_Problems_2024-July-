/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
    let location = new Map();
    let row = new Array(mat.length).fill(0);
    let col = new Array(mat[0].length).fill(0);

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            location.set(mat[i][j], [i, j])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let first = arr[i]
        let [lrow, lcol] = location.get(first)

        row[lrow]++
        col[lcol]++

        if (row[lrow] === mat[0].length || col[lcol] === mat.length) {
            return i
        }
    }


};