/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    // nums.sort((a, b) => a - b)
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > min && nums[i] < max) {
            count++
        }
    }
    return count

};