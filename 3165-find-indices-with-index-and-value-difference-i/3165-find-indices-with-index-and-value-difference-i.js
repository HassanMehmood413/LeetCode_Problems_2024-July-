/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i; j < nums.length; j++) {

    //         if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j] >= valueDifference)) {
    //             return [i, j]

    //         }
    //     }
    // }
    // return [-1, -1]
    let i = 0
    let j = 0

    while (i <= nums.length - 1) {
        if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) {
            return [i, j]
        }
        if (j < nums.length - 1) {
            j++
        }
        else {
            i++
            j = i
        }

    }
    return [-1, -1]
}