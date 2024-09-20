/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxjump = 0
    a = Math.min(nums)
    if (a > 0) return true
    for (let i = 0; i < nums.length; i++) {
        maxjump = Math.max(maxjump, i + nums[i])
        if (maxjump < i + 1) break
    }
    return maxjump >= nums.length - 1
};