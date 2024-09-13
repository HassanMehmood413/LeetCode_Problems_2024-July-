/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0]
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        if (sum < 0) {
            sum = 0
        }
        if (sum > max) {
            max = sum

        }
    }
    if (max < 0) {
        return Math.min(...nums)
    }
    else {
        return max
    }
};