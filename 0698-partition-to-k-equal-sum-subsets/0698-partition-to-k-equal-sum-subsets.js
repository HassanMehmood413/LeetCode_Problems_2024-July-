/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    let sum = nums.reduce((a, v) => a + v, 0)
    if ((sum % k) !== 0) return false
    if (nums.length < k) return false
    if (nums[nums.length - 1] > sum) return false
    nums = nums.sort((a, b) => b - a)
    let target = sum / k
    if (nums[0] > target) return false
    let visit = new Array(nums.length).fill(false)
    var again = function (start, sum, count) {
        if (count == 0) return true
        if (sum == target) {
            return again(0, 0, count - 1)
        }
        for (let i = start; i < nums.length; i++) {
            if (visit[i] || nums[i] + sum > target) continue
            visit[i] = true
            if (again(i + 1, sum + nums[i], count)) { return true }
            visit[i] = false
        }
        return false
    }
    return again(0, 0, k)
};