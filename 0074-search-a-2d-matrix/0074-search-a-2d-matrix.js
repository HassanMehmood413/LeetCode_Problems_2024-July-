/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

    let row = null;
    for (let i = 0; i < matrix.length; i++) {
        const first = matrix[i][0];
        const last = matrix[i][matrix[i].length - 1];
        if (first <= target && target <= last) {
            row = matrix[i];
            break; 
        }
    }
    if (!row) return false;

    let left = 0;
    let right = row.length - 1;

    while (left <= right) {
        const mid = (left + right) >> 1;
        if (row[mid] === target) return true;
        if (row[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return false;
};
