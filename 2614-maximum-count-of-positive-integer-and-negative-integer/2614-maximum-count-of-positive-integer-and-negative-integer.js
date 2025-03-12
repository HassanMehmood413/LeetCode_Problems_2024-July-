/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let pos = 0
    let neg = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) neg++
        else if (nums[i] > 0) {
            pos++
        }
    }
    return Math.max(pos, neg)
};