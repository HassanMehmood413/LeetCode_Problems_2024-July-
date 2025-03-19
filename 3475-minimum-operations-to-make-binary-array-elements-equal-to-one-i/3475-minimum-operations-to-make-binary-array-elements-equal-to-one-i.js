/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let flip = 0
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] == 0) {
            flip++
            nums[i] = 1 - nums[i]
            nums[i + 1] = 1 - nums[i + 1]
            nums[i + 2] = 1 - nums[i + 2]
        }
    }
    if (nums[nums.length - 1] == 0 || nums[nums.length - 2] == 0) return -1
    return flip
};