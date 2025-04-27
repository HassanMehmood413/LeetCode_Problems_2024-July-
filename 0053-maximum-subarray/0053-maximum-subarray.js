/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        if (sum < 0) {
            sum = 0
        }
        else if (max < sum) {
            max = sum
        }
    }
    return max == -Infinity ? Math.max(...nums) : max;
}