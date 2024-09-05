/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (nums) {
    let left = 0
    let right = nums.length - 1
    let max = -Infinity
    while (left < right) {
        if (nums[0] != nums[left]) {
            max = Math.max(max, left - 0)
        }
        if (nums[left] != nums[right]) {
            max = Math.max(max, right - left)
        }
        left++
    }
    return max
};