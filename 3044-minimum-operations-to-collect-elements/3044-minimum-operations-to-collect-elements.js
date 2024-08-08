/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let count = 0
    let arr = []

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] <= k) {
            if (nums[i] !== nums[i + 1]) {
                arr.push(nums[i])
                count++
                let set = new Set(arr)
                arr = Array.from(set)
            }
        }
        if (arr.length == k) {
            return nums.length - i
        }
    }
};