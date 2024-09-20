/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxjump = 0
    let min = Math.min(...nums)
    if (min > 0) return true
    else {
        for (let i = 0; i < nums.length; i++) {
            maxjump = Math.max(maxjump, i + nums[i])
            if (maxjump <= i + 1) break
        }
        return maxjump >= nums.length - 1
    }
};