/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i] + sum
    }
    nums = nums.toString().split("")
    sum2 = 0
    for (let j = 0; j < nums.length; j++) {
        a = Number(nums[j])
        if (isNaN(a)) {
            continue
        }
        else {
            sum2 = sum2 + Number(nums[j])
        }
    }
    return Math.abs(sum-sum2)
};