/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let left = 1
    let res = []
    let length = 0
    let max = 0
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] <= nums[r - 1]) {
            res = []
            length = 0

        }
        res.push(nums[r])
        length++
        max = Math.max(length, max)
    }
    return max
};