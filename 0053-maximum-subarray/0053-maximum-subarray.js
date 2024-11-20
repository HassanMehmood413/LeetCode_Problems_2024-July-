/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity
    let sum = 0
    for (let right = 0; right < nums.length; right++) {
        sum = sum + nums[right]
        if (sum < 0) {
            sum = 0
        }
        else {
            max = Math.max(sum, max)
        }

    }
    return max == -Infinity ? Math.max(...nums) : max
};