/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // Time Complexity = 0(M LogN)
    // Space Complextiy = 0(1)
    // let isvalid = false
    // for (let i = 0; i < matrix.length; i++) {
    //     if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
    //         let left = 0
    //         let right = matrix[i].length
    //         while (left <= right) {
    //             let mid = Math.floor((left + right) / 2)
    //             if (matrix[i][mid] == target) {
    //                 return isvalid = true
    //             }
    //             else if (matrix[i][mid] > target) {
    //                 right = mid - 1
    //             }
    //             else {
    //                 left = mid + 1
    //             }
    //         }
    //     }
    //     if(isvalid == true){

    //         return true
    //     }
    // }
    // return isvalid

    let n = matrix.length
    let m = matrix[0].length

    let left = 0
    let right = n * m - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let row = Math.floor(mid / m)
        let col = mid % m

        if (matrix[row][col] == target) return true
        else if (matrix[row][col] > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return false
};