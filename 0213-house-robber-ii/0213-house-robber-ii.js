/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) return nums[0]
    let dp = new Array(nums.length)
    let dp2 = new Array(nums.length)

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length - 1; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    let a = dp[nums.length - 2]

    dp2[0] = 0
    dp2[1] = nums[1]
    for (let i = 2; i < nums.length; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i])
    }
    let b = dp2[nums.length - 1]
    return Math.max(a, b)
};