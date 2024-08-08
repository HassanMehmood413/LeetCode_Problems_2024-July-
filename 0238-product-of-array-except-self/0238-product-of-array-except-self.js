/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length
    let array = Array(n).fill(1)
    let left = 1
    for (let i = 0; i < nums.length; i++) {
        array[i] = array[i] * left
        left = left * nums[i]
    }
    let right = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        array[i] = array[i] * right
        right = right * nums[i]
    }
    return array
};