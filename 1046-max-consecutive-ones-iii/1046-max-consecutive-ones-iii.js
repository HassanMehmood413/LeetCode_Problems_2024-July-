/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0
    let right = 0
    let max_l = 0
    let zerocount = 0
    while (right < nums.length) {
        if (nums[right] === 0) {
            zerocount++
        }
        while (zerocount > k) {
            if (nums[left] == 0) {
                zerocount--
            }
            left++
        }
        max_l = Math.max(max_l, right - left + 1)
        right++
    }
    return max_l
};