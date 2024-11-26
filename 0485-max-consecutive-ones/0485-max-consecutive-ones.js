/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let left = 0
    let right = 1
    let count = 0
    let max = 0
    while (left < nums.length) {
        if (nums[left] == 1) {
            left++
            count++
        }
        else {
            count = 0
            left++
        }
        max = Math.max(count, max)
    }
    return max
};