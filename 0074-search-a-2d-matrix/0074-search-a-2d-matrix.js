/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let arr = matrix.flat()
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        console.log(mid)
        if (arr[mid] == target) {
            return true
        }
        else if (arr[mid] > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return false
}