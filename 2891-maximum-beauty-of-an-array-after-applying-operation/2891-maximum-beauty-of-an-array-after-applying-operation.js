/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
    nums = nums.sort((a, v) => a - v)
    let count = 0
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] - nums[left] > 2 * k) {
            left++
        }
        count = Math.max(count, i - left + 1)
    }
    return count
};