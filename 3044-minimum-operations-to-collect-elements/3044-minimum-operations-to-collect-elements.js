/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let count = 0
    let set = new Set()
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] <= k) {
            set.add(nums[i])
        }
        if (set.size == k) {
            return nums.length - i
        }
    }
};