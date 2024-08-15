/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let i = 0
    let max = -1
    let j = i + 1
    while (i <= nums.length - 2) {
        if (i < j && nums[i] < nums[j]) {
            diff = nums[j] - nums[i]
            if (diff > max) {
                max = diff
            }
        }
        j++
        if (j > nums.length - 1) {
            i++
            j = i + 1
        }
    }
    return max
};