/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {

    let left = 0
    let right = nums.length
    nums = nums.sort((a, b) => a - b)
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        let low = lowcount(nums, lower - nums[i], i + 1)
        let uppers = uppercount(nums, upper - nums[i], i + 1)
        ans += uppers - low
    }
    return ans
    function lowcount(nums, target, start) {
        let end = nums.length
        while (start < end) {
            let mid = Math.floor((start + end) / 2)
            if (nums[mid] >= target) {
                end = mid
            }
            else {
                start = mid + 1
            }
        }
        return start
    }
    function uppercount(nums, target, start) {
        let end = nums.length
        while (start < end) {
            let mid = Math.floor((start + end) / 2)
            if (nums[mid] > target) {
                end = mid
            }
            else {
                start = mid + 1
            }
        }
        return start
    }
};