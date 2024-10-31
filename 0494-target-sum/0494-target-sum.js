/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let count = 0
    var again = function (start, sum) {
        if (start == nums.length) {
            if (sum == target) {
                count++
            }
            return
        }
        again(start + 1, sum + nums[start])
        again(start + 1, sum - nums[start])

    }
    again(0, 0)

    return count
}