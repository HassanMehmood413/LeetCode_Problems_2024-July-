/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = nums.reduce((a, b) => a + b, 0)
    if (sum % 2 != 0) {
        return false
    }
    let target = Math.floor(sum / 2)
    let dp = new Set()
    dp.add(0)
    for (let i = nums.length - 1; i >= 0; i--) {
        let next = new Set()
        for (let t of dp) {
            next.add(t + nums[i])
            next.add(t)
        }
        dp = next
    }
    return dp.has(target)
};