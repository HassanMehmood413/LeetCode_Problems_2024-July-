/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let max = Math.max(...nums)
    let an = 0
    let max_l = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == max) {
            max_l++
            if (max_l > an) {
                an = max_l
            }
        }
        else {
            max_l = 0
        }
    }
    return an
};