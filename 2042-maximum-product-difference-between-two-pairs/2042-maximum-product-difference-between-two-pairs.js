/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    nums.sort((a, b) => b - a)
    let str = ''
    let str2 = ''
    for (let i = 0; i < 1; i++) {
        str = nums[i] * nums[i + 1]
        str2 = nums[nums.length - 1] * nums[nums.length - 2]
    }
    return str - str2
};