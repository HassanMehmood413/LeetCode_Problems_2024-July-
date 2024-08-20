/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => a - b)
    let l = 0
    for (let i = 0; i < k; i++) {
        if (nums[i] < 0 && l < k) {
            nums[i] = nums[i] * -1
            l++
        }
        else if ( l < k) {
            let a = Math.min(...nums)
            let index = nums.indexOf(a)
            nums[index] *= -1
            l++
        }
    }
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    return sum
};