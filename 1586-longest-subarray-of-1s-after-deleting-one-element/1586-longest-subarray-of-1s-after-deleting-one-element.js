/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let left = 0
    let right = 0
    let length = 0
    let count = 0
    while (right < nums.length) {
        if (nums[right] == 0) {
            count++
            while (count > 1) {
                if (nums[left] == 0) {
                    count--
                }
                left++
            }
        }
        length = Math.max(right - left, length)
        right++
    }
    return length
};