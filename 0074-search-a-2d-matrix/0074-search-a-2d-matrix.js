/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let isvalid = false
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
            let left = 0
            let right = matrix[i].length
            while (left <= right) {
                let mid = Math.floor((left + right) / 2)
                if (matrix[i][mid] == target) {
                    return isvalid = true
                }
                else if (matrix[i][mid] > target) {
                    right = mid - 1
                }
                else {
                    left = mid + 1
                }
            }
        }
        if(isvalid == true){
            return true
        }
    }
    return isvalid
};