/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let arr = []
    let length = mat[0].length
    let count = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < length; j++) {
            if (mat[i][j] == 1) {
                count++
            }
        }
        arr.push(count)
        count = 0

    }
    const indexedArr = arr.map((value, index) => [value, index]);

    indexedArr.sort((a, b) => a[0] - b[0]);

    const smallestIndexes = indexedArr.slice(0, k).map(pair => pair[1]);

    return smallestIndexes

};