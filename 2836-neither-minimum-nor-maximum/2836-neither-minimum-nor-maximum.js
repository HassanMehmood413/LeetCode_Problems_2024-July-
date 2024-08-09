/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== max && nums[i] != min) {
            return nums[i]
        }
    }
    return -1
};