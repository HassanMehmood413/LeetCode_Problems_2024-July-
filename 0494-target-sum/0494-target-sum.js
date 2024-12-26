/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let count = 0
    var again = function (sum, target, start) {
        if (start == nums.length) {
            if (sum == target) {
                count++
            }
            return
        }
        again(sum + nums[start], target, start + 1)

        again(sum - nums[start], target, start + 1)
    }
    again(0, target, 0)
    return count
};